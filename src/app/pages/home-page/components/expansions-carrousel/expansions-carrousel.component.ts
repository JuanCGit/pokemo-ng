import { Component, Input } from "@angular/core";
import { expansionInterface } from "../../../../interfaces/expansion.interface";

@Component({
  selector: "app-expansions-carrousel",
  templateUrl: "./expansions-carrousel.component.html",
  styleUrl: "./expansions-carrousel.component.scss",
})
export class ExpansionsCarrouselComponent {
  @Input() carrouselTitle: string = "";
  @Input() expansions: expansionInterface[] = [];
  @Input() seeAllLink: string =
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
}