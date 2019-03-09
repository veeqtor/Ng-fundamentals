import { VotersService } from "./../upvotes/voters.service";
import { AuthService } from "src/app/user/auth.service";
import { SessionListComponent } from "./session-list.component";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { UpvotesComponent } from "../upvotes/upvotes.component";
import { DurationPipe } from "../shared/duration.pipe";
import { CollapsibleWellComponent } from "src/app/common/collapsible-well.component";

describe("SessionListComponent", () => {
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(async(() => {
    const mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {
        userName: "joe"
      }
    };
    const mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        DurationPipe,
        UpvotesComponent,
        CollapsibleWellComponent
      ],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService
        },
        {
          provide: VotersService,
          useValue: mockVoterService
        }
      ],
      schemas: [
        //   for shallow rendering
        //   NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe("Initial display", () => {
    it("Should have the correct session title", () => {
      component.sessions = [
        {
          id: 3,
          name: "session 1",
          presenter: "joe",
          level: "beginner",
          abstract: "abstract",
          duration: 1,
          voters: ["john", "bob"]
        }
      ];
      component.filterBy = "all";
      component.sortBy = "name";
      component.eventId = 4;
      component.ngOnChanges();
      fixture.detectChanges();
      //   expect(element.querySelector("[well-title]").textContent).toContain("SESSION 1");
      expect(debugEl.query(By.css("[well-title]")).nativeElement.textContent).toContain(
        "SESSION 1"
      );
    });
  });
});
