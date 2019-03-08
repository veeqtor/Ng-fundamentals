import { Component, OnInit } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ISession } from "../events/shared/event.model";
import { EventService } from "../events/shared/event.service";

@Component({
  selector: "events-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";
  foundSessions: ISession[];
  constructor(public auth: AuthService, private eventService: EventService) {}

  ngOnInit() {}

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
