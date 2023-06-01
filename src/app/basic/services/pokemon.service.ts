import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})

export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
