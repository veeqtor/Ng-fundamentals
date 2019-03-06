import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./create-events.component.html",
  styleUrls: ["./create-events.component.css"]
})
export class CreateEventsComponent implements OnInit {
  isDirty: boolean = true;
  constructor(private router: Router) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(["/events"]);
  }
}
