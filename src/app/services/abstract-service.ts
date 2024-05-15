import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AbstractService {
  private readonly cache: { [key: string]: unknown } = {};

  constructor(private http: HttpClient) {}

  cacheReques<T>(
    key: string,
    method: string,
    url: string,
    headers: HttpHeaders,
  ): Observable<T> {
    if (!this.cache[key]) {
      this.cache[key] = this.http.request<T>(method, url, { headers });
      return this.http.request<T>(method, url, { headers });
    }
    return this.cache[key] as Observable<T>;
  }
}