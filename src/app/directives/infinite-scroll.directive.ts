import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";

@Directive({
  selector: "[appInfiniteScroll]",
  standalone: true,
})
export class InfiniteScrollDirective<T = unknown>
  implements OnChanges, OnDestroy
{
  @Input() loadFn!: (page: number) => Observable<T[]>;
  @Input() page!: number;
  @Input() items: T[] = [];
  @Output() itemsChange = new EventEmitter<T[]>();

  private componentDestroyed$ = new Subject<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["page"]) {
      this.loadNextPage();
    }
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  loadNextPage(): void {
    this.loadFn(this.page)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (items) => this.handleNewItems(items),
      });
  }

  private handleNewItems(items: T[]): void {
    this.items = [...this.items, ...items];
    this.itemsChange.emit(this.items);
    this.page++;
  }
}