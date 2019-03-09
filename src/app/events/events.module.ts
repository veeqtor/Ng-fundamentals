import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CollapsibleWellComponent } from "../common/collapsible-well.component";
import { CreateEventsComponent } from "./create-events/create-events.component";
import { LocationValidator } from "./create-events/location-validator.directive";
import { CreateSessionComponent } from "./create-session/create-session.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { SessionListComponent } from "./event-detail/session-list.component";
import { EventsListComponent } from "./event-list/event-list.component";
import { EventRouterModule } from "./event-routing.module";
import { EventThumbnailComponent } from "./event-thumbnail/event-thumbnail.component";
import { EventsAllComponent } from "./events-all/events-all.component";
import { DurationPipe } from "./shared/duration.pipe";
import { UpvotesComponent } from "./upvotes/upvotes.component";
import { VotersService } from "./upvotes/voters.service";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, EventRouterModule],

  declarations: [
    EventDetailComponent,
    EventsListComponent,
    CreateEventsComponent,
    EventThumbnailComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    UpvotesComponent,
    LocationValidator,
    EventsAllComponent
  ],

  providers: [VotersService]
})
export class EventsModule {}
