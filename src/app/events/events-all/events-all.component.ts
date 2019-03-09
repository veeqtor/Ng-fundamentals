import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { IEvent } from "../shared/event.model";

@Component({
  templateUrl: "./events-all.component.html",
  styleUrls: ["./events-all.component.css"]
})
export class EventsAllComponent implements OnInit {
  allEvents: IEvent[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.allEvents = this.route.snapshot.data["all_events"];
  }
}
