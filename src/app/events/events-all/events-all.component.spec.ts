import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EventThumbnailComponent } from "./../event-thumbnail/event-thumbnail.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EventsAllComponent } from "./events-all.component";

describe("EventsAllComponent", () => {
  let component: EventsAllComponent;
  let fixture: ComponentFixture<EventsAllComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [EventsAllComponent, EventThumbnailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAllComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display fine", () => {
    component.allEvents = [
      {
        date: new Date("9/26/2036"),
        id: 1,
        imageUrl: "/assets/images/angularconnect-shield.png",
        location: { address: "1057 DT", city: "London", country: "England" },
        name: "Angular Connect",
        price: 599.99,
        sessions: [],
        time: "10:00 am"
      }
    ];
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
