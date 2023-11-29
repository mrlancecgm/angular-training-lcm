import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { BarangayService } from "../services/barangay.service";

@Injectable({
  providedIn: "root",
})
export class BarangayResolver implements Resolve<any> {
  constructor(private barangayService: BarangayService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.barangayService
      .getBarangaysForDropdown()
      .toPromise()
      .then((result) => ([ ...result ]))
      .catch(() => ([]));
  }
}
