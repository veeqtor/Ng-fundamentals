import { EventService } from "./shared/event.service";
import { Component, OnInit } from "@angular/core";
import { IEvent } from "./event.interface";
import { ToastrService } from "../common/toastr.service";

@Component({
  selector: "events-list",
  templateUrl: "./event-list.component.html"
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService, private toastr: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvent();
  }

  handleThumbClick(eventName) {
    this.toastr.success(eventName);
  }
}
