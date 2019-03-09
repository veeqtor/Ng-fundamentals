import { Router } from "@angular/router";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ISession } from "../shared/event.model";
import { restrictedWords } from "../shared/restricted-word.validator";

@Component({
  selector: "create-session",
  templateUrl: "./create-session.component.html",
  styleUrls: ["./create-session.component.css"]
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  newSessionForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
    this.presenter = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.level = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(["foo", "bar"])
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValue) {
    const session: ISession = {
      id: undefined,
      name: formValue.name,
      duration: +formValue.duration,
      level: formValue.level,
      presenter: formValue.presenter,
      abstract: formValue.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}
