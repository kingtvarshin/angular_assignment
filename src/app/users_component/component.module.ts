
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports:[CommonModule]
})
export class ComponentsModule { }