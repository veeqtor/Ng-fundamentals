import { LoginComponent } from "./login/login.component";
import { UserRoutingModule } from "./user-routing.module";
import { ProfileComponent } from "./profile/profile.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],

  exports: [],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: []
})
export class UserModule {}
