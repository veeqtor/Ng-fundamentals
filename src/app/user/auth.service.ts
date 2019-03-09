import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { tap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  currentUser: IUser;
  constructor(private http: HttpClient) {}
  loginUser(userName: string, password: string) {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    let loginInfo = {
      username: userName,
      password: password
    };
    return this.http
      .post("/api/login", loginInfo, options)
      .pipe(
        tap(data => {
          this.currentUser = <IUser>data["user"];
        })
      )
      .pipe(
        catchError(err => {
          return of(false);
        })
      );
  }

  isAuthenticated(): Boolean {
    return !!this.currentUser;
  }

  checkAuthStatus() {
    this.http
      .get("/api/currentIdentity")
      .pipe(
        tap(data => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.lastName = lastName;
    this.currentUser.firstName = firstName;

    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    console.log(this.currentUser);
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout() {
    this.currentUser = undefined;
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post("/api/logout", {}, options);
  }
}
