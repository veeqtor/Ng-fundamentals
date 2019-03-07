import { CreateEventsComponent } from "./events/create-events/create-events.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EventsAppComponent } from "./events-app.component";
import { NavbarComponent } from "./nav/navbar.component";
import { Error404Component } from "./errors/errors.component";
import { EventsModule } from "./events/events.module";
import { AppRoutingModule } from "./app-routing.module";
import { TOASTER_TOKEN, Toastr } from "./common/toastr.service";

// declare let toastr: any;
let toastr: Toastr = window["toastr"];

export const checkDirtyState = (component: CreateEventsComponent) => {
  if (component.isDirty)
    return window.confirm("You have not saved this event, do you really want to cancel?");
  return true;
};

@NgModule({
  imports: [BrowserModule, EventsModule, AppRoutingModule],

  declarations: [EventsAppComponent, NavbarComponent, Error404Component],

  providers: [
    {
      provide: TOASTER_TOKEN,
      useValue: toastr
    },
    {
      provide: "CanDeactivateCreateEvent",
      useValue: checkDirtyState
    }
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule {}
