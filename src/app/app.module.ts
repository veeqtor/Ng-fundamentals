import { JQ_TOKEN } from "./common/jQuery.service";
import { CreateEventsComponent } from "./events/create-events/create-events.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EventsAppComponent } from "./events-app.component";
import { Error404Component } from "./errors/errors.component";
import { EventsModule } from "./events/events.module";
import { AppRoutingModule } from "./app-routing.module";
import { TOASTER_TOKEN, Toastr } from "./common/toastr.service";
import { NavbarModule } from "./nav/navbar.module";
import { HttpClientModule } from "@angular/common/http";
// declare let toastr: any;
const toastr: Toastr = window["toastr"];
const jQuery = window["$"];

export const checkDirtyState = (component: CreateEventsComponent) => {
  if (component.isDirty)
    return window.confirm("You have not saved this event, do you really want to cancel?");
  return true;
};

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NavbarModule,
    EventsModule,
    AppRoutingModule
  ],

  declarations: [
    EventsAppComponent,
    Error404Component
  ],

  providers: [
    {
      provide: TOASTER_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    {
      provide: "CanDeactivateCreateEvent",
      useValue: checkDirtyState
    }
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule {}
