import { Component, OnInit, Input, OnChanges } from "@angular/core";

import { AuthService } from "src/app/user/auth.service";

import { VotersService } from "./../upvotes/voters.service";
import { ISession } from "../shared/event.model";

const sortByNameAsc = (s1: ISession, s2: ISession) => {
  if (s1.name > s2.name) return 1;
  if (s1.name === s2.name) return 0;
  return -1;
};

const sortByVoteDesc = (s1: ISession, s2: ISession) => {
  return s2.voters.length - s1.voters.length;
};

@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html"
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  visibleSessions: ISession[];

  constructor(private auth: AuthService, private voterService: VotersService) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === "name"
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVoteDesc);
    }
  }

  filterSessions(filter: string): void {
    if (filter === "all") {
      // cloning an array
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(sessions => {
        return sessions.level.toLocaleLowerCase() === filter;
      });
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

  toggleVote(session: ISession): void {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }
    if (this.sortBy === "votes") {
      this.visibleSessions.sort(sortByVoteDesc);
    }
  }
}
