import { Component, Input } from "@angular/core";
import { expansionInterface } from "../../interfaces/expansion.interface";

@Component({
  selector: "app-expansion",
  templateUrl: "./expansion.component.html",
  styleUrl: "./expansion.component.scss",
})
export class ExpansionComponent {
  @Input() expansion!: expansionInterface;
}
