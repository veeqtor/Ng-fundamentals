import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { IEvent, ISession } from "../shared/event.model";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl: "./event-detail.component.html",
  styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = "all";
  sortBy = "vote";

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.forEach(data => {
      this.event = data["event"];
      this.addMode = false;
    });
  }

  addSession(): void {
    this.addMode = !this.addMode;
  }

  saveNewSession(session: ISession): void {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe(() => {});
    this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }
}
