import { RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";

import { appRoutes } from "./routes";

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
