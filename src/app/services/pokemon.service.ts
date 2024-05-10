import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_TOKEN, API_URL, API_VERSION } from "../../environment/api.const";
import { cardInterface } from "../interfaces/card.interface";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  apiUrl: string = `${API_URL}/v${API_VERSION}`;
  token = API_TOKEN;

  constructor(private http: HttpClient) {}

  getCards(): Observable<cardInterface> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<any>(`${this.apiUrl}/cards`, { headers });
  }
}
