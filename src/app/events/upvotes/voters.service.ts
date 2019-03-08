import { Injectable } from "@angular/core";
import { ISession } from "../shared/event.model";

@Injectable()
export class VotersService {
  constructor() {}

  userHasVoted(session: ISession, voterName: string): boolean {
    //   returns true if the voterName
    // matches the voter in the current iteration
    return session.voters.some(voter => voter === voterName);
  }

  deleteVoter(session: ISession, voterName: string): void {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string): void {
    session.voters.push(voterName);
  }
}
