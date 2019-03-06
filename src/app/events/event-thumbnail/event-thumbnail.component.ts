import { Component, OnInit, Input } from "@angular/core";
import { IEvent } from "../event.interface";

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.css"]
})
export class EventThumbnailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() event: IEvent;

  getStartStyle() {
    if (this.event && this.event.time === "8:00 am") {
      return {
        color: "#003300",
        "font-weight": "bold",
        "font-style": "italic"
      };
    }
  }
}
