import { Component } from "@angular/core";
import {
  ExpansionModel,
  ExpansionModelMock,
} from "../../models/expansion.model";

@Component({
  selector: "app-expansion-list-page",
  templateUrl: "./expansion-list-page.component.html",
  styleUrl: "./expansion-list-page.component.scss",
})
export class ExpansionListPageComponent {
  expansions: ExpansionModel[] = Array.from(
    { length: 30 },
    () => ExpansionModelMock,
  );
}