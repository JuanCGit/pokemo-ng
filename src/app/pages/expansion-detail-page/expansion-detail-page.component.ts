import {
  Component,
  computed,
  input,
  InputSignal,
  signal,
  Signal,
  WritableSignal,
} from "@angular/core";
import { CardInterface } from "../../interfaces/card.interface";
import { PokemonService } from "../../services/pokemon.service";
import { map, Observable } from "rxjs";
import { ExpansionModel } from "../../models/expansion.model";

@Component({
  selector: "app-expansion-detail-page",
  templateUrl: "./expansion-detail-page.component.html",
  styleUrl: "./expansion-detail-page.component.scss",
})
export class ExpansionDetailPageComponent {
  id: InputSignal<string> = input("");
  page: WritableSignal<number> = signal(1);
  scrollEnd = false;
  acumulatedCards: CardInterface[] = [];

  expansionCards$: Signal<Observable<CardInterface[]>> = computed(() =>
    this.pokemonService.getCardsByExpansion(this.id(), this.page()).pipe(
      map((response) => {
        if (response.totalCount <= response.page * response.pageSize)
          this.scrollEnd = true;
        this.acumulatedCards = [...this.acumulatedCards, ...response.data];
        return this.acumulatedCards;
      }),
    ),
  );

  expansion$: Signal<Observable<ExpansionModel>> = computed(() =>
    this.pokemonService.getSetById(this.id()),
  );

  constructor(private pokemonService: PokemonService) {}

  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    const tolerance = 50;

    if (
      element.scrollHeight - element.scrollTop <=
        element.clientHeight + tolerance &&
      !this.scrollEnd
    ) {
      this.page.set(this.page() + 1);
    }
  }
}