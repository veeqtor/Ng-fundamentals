import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared/event.model";

@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html"
})
export class SessionListComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[];

  ngOnInit() {}
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === "name"
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVoteDesc);
    }
  }

  filterSessions(filter: string) {
    if (filter === "all") {
      // cloning an array
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(sessions => {
        return sessions.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

const sortByNameAsc = (s1: ISession, s2: ISession) => {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
};

const sortByVoteDesc = (s1: ISession, s2: ISession) => {
  return s2.voters.length - s1.voters.length;
};
