import { Routes } from "@angular/router";
import { Error404Component } from "./errors/errors.component";

export const appRoutes: Routes = [
  {
    // Lazy loading a feature module
    path: "user",
    loadChildren: "./user/user.module#UserModule"
  },
  {
    path: "404",
    component: Error404Component
  },
  {
    path: "",
    redirectTo: "events",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "events",
    pathMatch: "full"
  }
];
