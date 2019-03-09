import { Toastr, TOASTER_TOKEN } from "./../../common/toastr.service";
import { AuthService } from "./../auth.service";
import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTER_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern("[a-zA-Z].*")
    ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  validateLastName() {
    return this.lastName.invalid && this.lastName.touched;
  }
  validateFirstName() {
    return this.firstName.invalid && this.firstName.touched;
  }

  cancel() {
    this.router.navigate(["events"]);
  }

  saveProfile(formValues: { firstName: string; lastName: string }) {
    if (this.profileForm.valid) {
      this.authService
        .updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success("Profile Saved");
        });
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(["user/login"]);
    });
  }
}
