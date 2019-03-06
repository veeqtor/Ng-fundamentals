import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { EventsListComponent } from "./event-list/event-list.component";
import { CreateEventsComponent } from "./create-events/create-events.component";
import { EventThumbnailComponent } from "./event-thumbnail/event-thumbnail.component";
import { CommonModule } from "@angular/common";
import { EventRouterModule } from './event-routing.module';
import { CreateSessionComponent } from './create-session/create-session.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EventRouterModule
],

  declarations: [
    EventDetailComponent,
    EventsListComponent,
    CreateEventsComponent,
    EventThumbnailComponent,
    CreateSessionComponent
  ]
})
export class EventsModule {}
