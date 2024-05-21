import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AbstractService {
  private readonly cache: { [key: string]: unknown } = {};

  cacheRequest<T = unknown>(
    key: string,
    request: Observable<T>,
  ): Observable<T> {
    if (!this.cache[key]) {
      this.cache[key] = request.pipe(shareReplay(1));
    }

    return this.cache[key] as Observable<T>;
  }
}