import { Router } from "@angular/router";
import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./login.component.html",
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  userName: string;
  password: string;
  mouseoverLogin: boolean;
  loginInvalid: boolean = false;

  ngOnInit() {}

  login(formValues: { userName: string; password: string }) {
    this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp => {
      if (!resp) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(["events"]);
      }
    });
  }

  cancel() {
    this.router.navigate(["events"]);
  }
}
