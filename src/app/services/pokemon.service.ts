import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_TOKEN, API_URL, API_VERSION } from "../../environment/api.const";
import { cardInterface } from "../interfaces/card.interface";
import { paginatedInterface } from "../interfaces/paginatedInterface";
import { AbstractService } from "./abstract-service";
import { SetInterface } from "../interfaces/set.interface";

@Injectable({
  providedIn: "root",
})
export class PokemonService extends AbstractService {
  apiUrl: string = `${API_URL}/v${API_VERSION}`;
  token = API_TOKEN;
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(http: HttpClient) {
    super(http);
  }

  // Cards

  getCardById(cardId: string): Observable<cardInterface> {
    return this.cacheReques(
      `card-${cardId}`,
      "GET",
      `${this.apiUrl}/cards/${cardId}`,
      this.headers,
    );
  }

  getCardByExpansion(
    expansionId: string,
  ): Observable<paginatedInterface<cardInterface>> {
    return this.cacheReques(
      `card-${expansionId}`,
      "GET",
      `${this.apiUrl}/cards?q=set.id:${expansionId}`,
      this.headers,
    );
  }

  // Sets

  getSetsByName(
    searchString: string,
  ): Observable<paginatedInterface<SetInterface>> {
    return this.cacheReques(
      `card-${searchString}`,
      "GET",
      `${this.apiUrl}/sets?q=name:${searchString}* series:${searchString}*`,
      this.headers,
    );
  }
}