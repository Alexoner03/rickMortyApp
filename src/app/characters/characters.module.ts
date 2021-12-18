import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CharactersPageComponent,
    CharacterDetailPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
})
export class CharactersModule { }
