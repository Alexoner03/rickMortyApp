import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../interfaces/characters.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss'],
})
export class CharacterDetailPageComponent implements OnInit {
  character!: Character;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.characterService
      .getOneCharacter(this.route.snapshot.params['id'])
      .subscribe((resp) => {
        this.character = resp;
      });
  }

  back() {
    this.location.back();
  }
}
