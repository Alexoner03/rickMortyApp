import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CardCharacterComponent } from './card-character/card-character.component';

@NgModule({
  declarations: [SidebarComponent, CardCharacterComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, CardCharacterComponent],
})
export class SharedModule {}
