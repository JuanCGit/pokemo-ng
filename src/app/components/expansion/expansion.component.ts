import { Component, Input } from "@angular/core";

@Component({
  selector: "app-expansion",
  templateUrl: "./expansion.component.html",
  styleUrl: "./expansion.component.scss",
})
export class ExpansionComponent {
  @Input() acquired: number = 0;
  @Input() total: number = 100;
  @Input() overImage: string = "";
  @Input() bgImage: string = "";
}
