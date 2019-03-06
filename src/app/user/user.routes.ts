import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { Routes } from "@angular/router";

export const userRoutes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];
