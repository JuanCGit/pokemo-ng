import { Component } from "@angular/core";
import { ExpansionInterface } from "../../interfaces/expansion.interface";

@Component({
  selector: "app-expansion-list-page",
  templateUrl: "./expansion-list-page.component.html",
  styleUrl: "./expansion-list-page.component.scss",
})
export class ExpansionListPageComponent {
  expansionMock: ExpansionInterface = {
    overImage: "/assets/images/example-over-image.png",
    bgImage: "/assets/images/example-expansion.jpg",
    total: 100,
    acquired: 20,
  };
  expansions: ExpansionInterface[] = Array.from(
    { length: 30 },
    () => this.expansionMock,
  );
}