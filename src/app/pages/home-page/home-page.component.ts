import { Component } from "@angular/core";
import { ExpansionModel } from "../../models/expansion.model";
import { Observable } from "rxjs";
import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent {
  constructor(private pokemonService: PokemonService) {}

  page: number = 1;

  expansions$: Observable<ExpansionModel[]> = this.pokemonService.getSets(
    this.page,
  );
}