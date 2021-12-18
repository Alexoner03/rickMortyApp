import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/characters/interfaces/characters.interface';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  
  favoritesChars: Character[] = []
  
  constructor(private favoriteService: FavoritesService) { }

  ngOnInit(): void {
    this.reload()
  }

  reload() {
    this.favoritesChars = this.favoriteService.getCharacters()
  }

}
