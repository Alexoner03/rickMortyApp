import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Character, Info } from '../../interfaces/characters.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  characters: Character[] = [];
  responseInfo?: Info;
  
  @ViewChild('navigation')
  navigationElm!: ElementRef<HTMLDivElement>;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(resp => {
      this.characters = resp.results;
      this.responseInfo = resp.info;
    })
  }

  navigateTo(page: string) {
    this.characterService.getAllCharacters(page).subscribe(resp => {
      this.characters = resp.results;
      this.responseInfo = resp.info;
      this.navigationElm.nativeElement.parentElement?.parentElement?.scrollTo({
        top: 0
      })
    })
  }

}
