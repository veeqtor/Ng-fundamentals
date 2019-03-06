import { Component, OnInit } from "@angular/core";
import { IEvent } from "../event.interface";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./event-detail.component.html",
  styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {
  event: IEvent;

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.event = this.eventService.getEvent(id);
    }
  }
}
