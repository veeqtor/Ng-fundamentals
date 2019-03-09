import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ISession } from "../shared/event.model";

@Injectable()
export class VotersService {
  constructor(private http: HttpClient) {}

  userHasVoted(session: ISession, voterName: string): boolean {
    //   returns true if the voterName
    // matches the voter in the current iteration
    return session.voters.some(voter => voter === voterName);
  }

  deleteVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters = session.voters.filter(voter => voter !== voterName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http
      .delete(url)
      .pipe(catchError(this.handleError<ISession[]>("deleteVoter")))
      .subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string): void {
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    this.http
      .post(url, {}, options)
      .pipe(catchError(this.handleError<ISession[]>("addVoter")))
      .subscribe();
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(<T>result);
    };
  }
}
