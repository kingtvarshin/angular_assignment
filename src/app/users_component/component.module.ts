
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsersComponent, UsersCardsComponent],
  exports: [UsersComponent],
  imports:[CommonModule]
})
export class ComponentsModule { }