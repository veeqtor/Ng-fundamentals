import { CreateSessionComponent } from "./create-session/create-session.component";
import { Routes } from "@angular/router";
import { CreateEventsComponent } from "./create-events/create-events.component";
import { EventsListComponent } from "./event-list/event-list.component";
import { EventListResolver } from "./shared/event-list-resolver.service";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { EventRouteActivator } from "./event-detail/event-route.activator";

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
    path: "events/:id",
    component: EventDetailComponent,
    canActivate: [EventRouteActivator]
  }
];
