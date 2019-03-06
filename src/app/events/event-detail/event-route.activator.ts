import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { EventService } from "../shared/event.service";

@Injectable({
  providedIn: "root"
})
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const eventExists = !!this.eventService.getEvent(+route.paramMap.get("id"));
    if (!eventExists) this.router.navigate(["/404"]);
    return eventExists;
  }
}
