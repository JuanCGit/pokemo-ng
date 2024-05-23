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
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { ExpansionModel } from "../../models/expansion.model";
import { toObservable } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-expansion-detail-page",
  templateUrl: "./expansion-detail-page.component.html",
  styleUrl: "./expansion-detail-page.component.scss",
})
export class ExpansionDetailPageComponent {
  id: InputSignal<string> = input("");
  id$: Observable<string> = toObservable(this.id);
  page: WritableSignal<number> = signal(1);
  page$: Observable<number> = toObservable(this.page);
  scrollEnd = false;
  private accumulatedCards$ = new BehaviorSubject<CardInterface[]>([]);
  expansionCards$: Signal<Observable<CardInterface[]>> = computed(() =>
    combineLatest([this.id$, this.page$]).pipe(
      switchMap(([id, page]) =>
        this.pokemonService.getCardsByExpansion(id, page).pipe(
          tap((response) => {
            if (response.totalCount <= response.page * response.pageSize)
              this.scrollEnd = true;
            const accumulated = this.accumulatedCards$.value.concat(
              response.data,
            );
            this.accumulatedCards$.next(accumulated);
          }),
        ),
      ),
      switchMap(() => this.accumulatedCards$.asObservable()),
    ),
  );

  expansion$: Signal<Observable<ExpansionModel>> = computed(() =>
    this.pokemonService.getSetById(this.id()),
  );

  constructor(private pokemonService: PokemonService) {}

  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    const tolerance = 0.5;
    if (
      element.scrollHeight - element.scrollTop <=
        element.clientHeight + tolerance &&
      !this.scrollEnd
    ) {
      this.page.set(this.page() + 1);
    }
  }
}