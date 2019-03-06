import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from "./profile.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [],
  declarations: [ProfileComponent],
  providers: []
})
export class UserModule {}
