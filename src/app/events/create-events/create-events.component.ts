import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl: "./create-events.component.html",
  styleUrls: ["./create-events.component.css"]
})
export class CreateEventsComponent implements OnInit {
  isDirty: boolean = true;
  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(["/events"]);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(data => {
      this.isDirty = false;
      this.router.navigate(["/events"]);
    });
  }
}
