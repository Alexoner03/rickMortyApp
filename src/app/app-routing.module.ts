import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailPageComponent } from './characters/pages/character-detail-page/character-detail-page.component';
import { CharactersPageComponent } from './characters/pages/characters-page/characters-page.component';
import { FavoritesPageComponent } from './favorites/pages/favorites-page/favorites-page.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersPageComponent,
  },
  {
    path: 'characters/:id',
    component: CharacterDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
