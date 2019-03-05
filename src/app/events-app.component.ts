import { Component } from "@angular/core";

@Component({
  selector: "events-app-root",
  template: `
    <events-navbar></events-navbar>
    <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = "ng-fundamentals";
}
