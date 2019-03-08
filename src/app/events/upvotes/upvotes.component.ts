import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "upvotes",
  templateUrl: "./upvotes.component.html",
  styleUrls: ["./upvotes.component.css"]
})
export class UpvotesComponent implements OnInit {
  iconColor: string;
  @Input() count: number;
  @Input() set voted(val: string) {
    this.iconColor = val ? "red" : "white";
  }
  @Output() vote = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.vote.emit({});
  }
}
