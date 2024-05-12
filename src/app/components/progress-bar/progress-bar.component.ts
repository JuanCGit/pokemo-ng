import { Component, Input } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrl: "./progress-bar.component.scss",
})
export class ProgressBarComponent {
  @Input() acquired: number = 0;
  @Input() total: number = 100;
  @Input() blackOrWhite: "B" | "W" = "W";
}
