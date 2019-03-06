import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { eventRoutes } from "./event.route";

@NgModule({
  imports: [RouterModule.forChild(eventRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class EventRouterModule {}
