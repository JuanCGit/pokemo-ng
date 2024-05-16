import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_TOKEN, API_URL, API_VERSION } from "../../environment/api.const";
import { CardInterface } from "../interfaces/card.interface";
import { PaginatedInterface } from "../interfaces/paginatedInterface";
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
}