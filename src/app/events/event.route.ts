import { Routes } from "@angular/router";

import { CreateSessionComponent } from "./create-session/create-session.component";
import { CreateEventsComponent } from "./create-events/create-events.component";
import { EventsListComponent } from "./event-list/event-list.component";
import { EventListResolver } from "./shared/event-list-resolver.service";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { EventResolver } from "./shared/event-resolver.service";
import { EventsAllComponent } from "./events-all/events-all.component";

export const eventRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventsComponent,
    canDeactivate: ["CanDeactivateCreateEvent"]
  },
  {
    path: "events/session/new",
    component: CreateSessionComponent
  },
  {
    // Pre-loading data for components
    path: "events",
    component: EventsListComponent,
    resolve: {
      events: EventListResolver
    }
  },
  {
    // Pre-loading data for components
    path: "all_events",
    component: EventsAllComponent,
    resolve: {
      all_events: EventListResolver
    }
  },
  {
    path: "events/:id",
    component: EventDetailComponent,
    resolve: {
      event: EventResolver
    }
  }
];
