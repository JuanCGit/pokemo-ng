import { Component } from "@angular/core";
import { ExpansionInterface } from "../../interfaces/expansion.interface";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent {
  constructor() {}

  expansionMock: ExpansionInterface = {
    overImage: "/assets/images/example-over-image.png",
    bgImage: "/assets/images/example-expansion.jpg",
    total: 100,
    acquired: 20,
  };
  expansions: ExpansionInterface[] = Array.from(
    { length: 10 },
    () => this.expansionMock,
  );
}