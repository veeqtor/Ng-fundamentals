import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "./../../common/toastr.service";
import { Component, OnInit } from "@angular/core";
import { IEvent } from "../shared/event.model";

@Component({
  templateUrl: "./event-list.component.html"
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
  }

  handleThumbClick(eventName) {
    this.toastr.success(eventName);
  }
}
