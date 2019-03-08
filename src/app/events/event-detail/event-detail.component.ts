import { Component, OnInit } from "@angular/core";
import { IEvent, ISession } from "../shared/event.model";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  templateUrl: "./event-detail.component.html",
  styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = "all";
  sortBy: string = "vote";

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const id = +params["id"];
      if (id) {
        this.event = this.eventService.getEvent(+params["id"]);
        this.addMode = false;
      }
    });
  }
  addSession() {
    this.addMode = !this.addMode;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
