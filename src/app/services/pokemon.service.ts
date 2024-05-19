import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { forkJoin, map, mergeMap, Observable, of } from "rxjs";
import { API_TOKEN, API_URL, API_VERSION } from "../../environment/api.const";
import { CardInterface } from "../interfaces/card.interface";
import { PaginatedInterface } from "../interfaces/paginatedInterface";
import { AbstractService } from "./abstract-service";
import { SetInterface } from "../interfaces/set.interface";
import { ExpansionModel } from "../models/expansion.model";
import { ExtraExpansionInfoInterface } from "../interfaces/image";

@Injectable({
  providedIn: "root",
})
export class PokemonService extends AbstractService {
  apiUrl: string = `${API_URL}/v${API_VERSION}`;
  headers = new HttpHeaders({
    Authorization: `Bearer ${API_TOKEN}`,
  });

  constructor(private http: HttpClient) {
    super();
  }

  getCardById(cardId: string): Observable<CardInterface> {
    return this.cacheRequest<CardInterface>(
      `card-${cardId}`,
      this.http.request<CardInterface>(
        "GET",
        `${this.apiUrl}/cards/${cardId}`,
        {
          headers: this.headers,
        },
      ),
    );
  }

  getCards(page: number): Observable<PaginatedInterface<CardInterface>> {
    return this.cacheRequest<PaginatedInterface<CardInterface>>(
      `cards-${page}`,
      this.http.request<PaginatedInterface<CardInterface>>(
        "GET",
        `${this.apiUrl}/cards?page=${page}`,
        {
          headers: this.headers,
        },
      ),
    );
  }

  getCardsByExpansion(
    expansionId: string,
  ): Observable<PaginatedInterface<CardInterface>> {
    return this.cacheRequest(
      `card-${expansionId}`,
      this.http.request<PaginatedInterface<CardInterface>>(
        "GET",
        `${this.apiUrl}/cards?q=set.id:${expansionId}`,
        {
          headers: this.headers,
        },
      ),
    );
  }

  getSetsByName(
    searchString: string,
  ): Observable<PaginatedInterface<SetInterface>> {
    return this.cacheRequest(
      `card-${searchString}`,
      this.http.request<PaginatedInterface<SetInterface>>(
        "GET",
        `${this.apiUrl}/sets?q=name:${searchString}* series:${searchString}*`,
        {
          headers: this.headers,
        },
      ),
    );
  }

  getSetExtraInfo(setId: string): Observable<ExtraExpansionInfoInterface> {
    return of({
      userTotalCards: 8,
      bgImage: "/assets/images/example-home-banner.jpg",
    });
  }

  getSets(page: number, pageSize: number = 15): Observable<ExpansionModel[]> {
    return this.cacheRequest(
      `sets-${page}`,
      this.http
        .get<PaginatedInterface<SetInterface>>(
          `${this.apiUrl}/sets?page=${page}&pageSize=${pageSize}&orderBy=-releaseDate`,
          {
            headers: this.headers,
          },
        )
        .pipe(
          mergeMap((paginatedSets) => {
            const defaultExpansions: SetInterface[] = paginatedSets.data;
            const extraInfoRequests: Observable<ExpansionModel>[] =
              defaultExpansions.map((set) =>
                this.getSetExtraInfo(set.id).pipe(
                  map((extraInfo) => new ExpansionModel(set, extraInfo)),
                ),
              );
            return forkJoin(extraInfoRequests);
          }),
        ),
    );
  }
}