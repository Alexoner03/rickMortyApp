import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Character,
  CharactersResponse,
} from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private url = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  getAllCharacters(page?: string): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(page ? page : this.url);
  }

  getOneCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(this.url + id);
  }
}
