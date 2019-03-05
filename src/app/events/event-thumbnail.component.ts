import { Component, OnInit, Input } from "@angular/core";
import { IEvent } from "./event.interface";

@Component({
  selector: "event-thumbnail",
  template: `
    <div *ngIf="event" class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div [ngStyle]="getStartStyle()" [ngSwitch]="event.time">
        Time: {{ event.time }}
        <span *ngSwitchCase="'8:00 am'"> (Early start)</span>
        <span *ngSwitchCase="'10:00 am'"> (Late start)</span>
        <span *ngSwitchDefault> (Normal start)</span>
      </div>
      <div>Price: \${{ event.price }}</div>
      <div *ngIf="event.location">
        <span>Location: {{ event.location.address }}</span>
        <span class="pad-left">{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
      <div *ngIf="event.onlineUrl">Online URL: {{ event.onlineUrl }}</div>
    </div>
  `,
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
        font-style: italic;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left: {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
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
