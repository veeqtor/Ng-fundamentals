import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { EventService } from "../shared/event.service";

@Component({
  templateUrl: "./create-events.component.html",
  styleUrls: ["./create-events.component.css"]
})
export class CreateEventsComponent implements OnInit {
  isDirty = true;
  name: string;
  date: string;
  time: string;
  price: number;
  address: string;
  city: string;
  country: string;
  imageUrl: string;
  onlineUrl: string;
  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(["/events"]);
  }

  saveEvent(formValues: any): void {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(["/events"]);
    });
  }
}
