import { Component, Input } from "@angular/core";
import { ExpansionModel } from "../../models/expansion.model";

@Component({
  selector: "app-expansion",
  templateUrl: "./expansion.component.html",
  styleUrl: "./expansion.component.scss",
})
export class ExpansionComponent {
  @Input() expansion!: ExpansionModel;
}