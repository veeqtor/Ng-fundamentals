import { InjectionToken } from "@angular/core";

export let TOASTER_TOKEN = new InjectionToken<Toastr>("Toastr");

export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}
