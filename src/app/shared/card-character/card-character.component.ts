import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Character } from 'src/app/characters/interfaces/characters.interface';
import { FavoritesService } from 'src/app/favorites/services/favorites.service';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
})
export class CardCharacterComponent implements OnInit {
  @Input()
  character: Character | undefined;

  @Input()
  favorite: boolean = false;

  @Output()
  onDelete: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  navigateToDetail(id: number) {
    this.router.navigate(['/characters', id]);
  }

  addFavorite(character: Character) {
    this.favoritesService.addCharacter(character);
    this.toastr.success("Agregado", character.name)
  }

  deleteFavorite(character: Character) {
    this.favoritesService.deleteCharacter(character.id);
    this.onDelete.emit(true);
    this.toastr.warning("Eliminado", character.name)
  }
}
