import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SimpleModalComponent } from "../common/simple-modal.component";
import { ModalTriggerDirective } from "../common/modal-trigger.directive";

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent, SimpleModalComponent, ModalTriggerDirective],
  providers: []
})
export class NavbarModule {}
