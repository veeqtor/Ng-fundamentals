import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { IEvent } from "../shared/event.model";

@Component({
  templateUrl: "./event-list.component.html"
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
  }
}
