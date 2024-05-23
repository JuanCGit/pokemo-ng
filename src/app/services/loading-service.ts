import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loadingStatus = this.loadingSubject.asObservable();
  private requestCount = 0;

  show() {
    this.requestCount++;
    this.loadingSubject.next(true);
  }

  hide() {
    if (this.requestCount > 0) {
      this.requestCount--;
    }
    if (this.requestCount === 0) {
      this.loadingSubject.next(false);
    }
  }
}
