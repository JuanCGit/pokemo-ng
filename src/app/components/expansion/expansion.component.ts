import { Component, Input } from "@angular/core";
import { ExpansionInterface } from "../../interfaces/expansion.interface";

@Component({
  selector: "app-expansion",
  templateUrl: "./expansion.component.html",
  styleUrl: "./expansion.component.scss",
})
export class ExpansionComponent {
  @Input() expansion!: ExpansionInterface;
}