import { AuthService } from "src/app/user/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "events-app-root",
  template: `
    <events-navbar></events-navbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit() {
    this.auth.checkAuthStatus();
  }
}
