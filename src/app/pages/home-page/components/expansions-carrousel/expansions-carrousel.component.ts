import { Component, Input } from "@angular/core";
import { ExpansionModel } from "../../../../models/expansion.model";

@Component({
  selector: "app-expansions-carrousel",
  templateUrl: "./expansions-carrousel.component.html",
  styleUrl: "./expansions-carrousel.component.scss",
})
export class ExpansionsCarrouselComponent {
  @Input() carrouselTitle: string = "";
  @Input() expansions: ExpansionModel[] = [];
  @Input() seeAllLink: string =
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
}