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
import { map, Observable, scan, startWith } from "rxjs";
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

  // page$ = toObservable(this.page);
  // expansionCards$: Observable<CardInterface[]> = this.page$.pipe(
  //   switchMap(() =>
  //     this.pokemonService.getCardsByExpansion(this.id(), this.page()),
  //   ),
  //   map((response) => response.data),
  //   scan<CardInterface[], CardInterface[]>((acc, newCards) => {
  //     this.scrollEnd = newCards.length === 0;
  //     return [...acc, ...newCards];
  //   }, []),
  //   startWith([]),
  // );

  expansionCards$: Signal<Observable<CardInterface[]>> = computed(() =>
    this.pokemonService.getCardsByExpansion(this.id(), this.page()).pipe(
      map((response) => response.data),
      scan<CardInterface[], CardInterface[]>((acc, newCards) => {
        this.scrollEnd = newCards.length === 0;
        return [...acc, ...newCards];
      }, []),
      startWith([]),
    ),
  );

  expansion$: Signal<Observable<ExpansionModel>> = computed(() =>
    this.pokemonService.getSetById(this.id()),
  );

  constructor(private pokemonService: PokemonService) {}

  onScroll(event: any): void {
    const element = event.target;
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