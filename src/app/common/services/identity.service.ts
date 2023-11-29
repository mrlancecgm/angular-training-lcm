import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { API_VERSION, BASE_PATH } from "../variable";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class IdentityService {
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

  login(body: { username: string; password: string }): Observable<any> {
    return this.httpClient
      .post<any>(`${this.basePath}/api/identity/token`, body)
      .pipe(
        map((response) => response),
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
