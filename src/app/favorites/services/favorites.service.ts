import { Injectable } from '@angular/core';
import { Character } from 'src/app/characters/interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  favoritesChars: Character[] = [];

  constructor() { }

  getCharacters(): Character[] {
    if(!localStorage.getItem('characters')){
      return [];
    }

    this.favoritesChars = JSON.parse(localStorage.getItem('characters')!)
    return this.favoritesChars;
  }
  
  deleteCharacter(id: number) {
    this.favoritesChars = this.favoritesChars.filter(c => c.id !== id)
    localStorage.setItem('characters',JSON.stringify(this.favoritesChars))
  }

  addCharacter(character: Character){
    
    if(this.favoritesChars.findIndex(c => c.id === character.id) !== -1){
      return
    }
    this.favoritesChars.push(character)
    localStorage.setItem('characters',JSON.stringify(this.favoritesChars))
  }

}
