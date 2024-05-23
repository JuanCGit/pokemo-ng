import { Component, OnInit } from "@angular/core";
import { LoadingService } from "../../services/loading-service";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrl: "./loading.component.scss",
})
export class LoadingComponent {
  isLoading$ = this.loadingService.loadingStatus;

  constructor(private loadingService: LoadingService) {}
}
