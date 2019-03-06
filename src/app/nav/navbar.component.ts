import { Component, OnInit } from "@angular/core";
import { AuthService } from "../user/auth.service";

@Component({
  selector: "events-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
