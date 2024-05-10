import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getCards().subscribe((data) => console.log(data, "HI"));
  }
}
