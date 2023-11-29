import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { API_VERSION, BASE_PATH } from "../variable";
import { Observable, throwError } from "rxjs";
import { Barangay } from "../models/barangay";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BarangayService {
  protected basePath = "/";
  protected apiVersion = "1";

  constructor(
    protected httpClient: HttpClient,
    @Inject(BASE_PATH) basePath: string,
    @Inject(API_VERSION) apiVersion: string
  ) {
    this.basePath = basePath;
    this.apiVersion = apiVersion;
  }

  getBarangaysForDropdown(): Observable<any> {
    return this.httpClient
      .get<Barangay[]>(
        `${this.basePath}/api/v${this.apiVersion}/administration/barangay/list-for-dropdown`
      )
      .pipe(
        map((response) => response),
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
