import { Component, OnInit, Input, Output } from "@angular/core";
import { ISession } from "../shared/event.model";

@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html"
})
export class SessionListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() sessions: ISession[];
}
