import { Component } from "@angular/core";
import { ExpansionModelMock } from "../../models/expansion.model";

@Component({
  selector: "app-expansion-detail-page",
  templateUrl: "./expansion-detail-page.component.html",
  styleUrl: "./expansion-detail-page.component.scss",
})
export class ExpansionDetailPageComponent {
  ExpansionModelMock = ExpansionModelMock;
}