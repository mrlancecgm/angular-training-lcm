import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MeterService } from '../services/meter.service';

@Injectable({
  providedIn: 'root'
})
export class MeterResolver implements Resolve<any> {
  constructor(private meterService: MeterService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.meterService
      .getMeterById(route.params.id)
      .toPromise()
      .then((result) => {
        return { ...result.data };
      })
      .catch(() => {
        return {};
      });
  }
}
