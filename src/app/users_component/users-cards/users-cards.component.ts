import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss']
})
export class UsersCardsComponent implements OnInit {

  @Input() user: User | undefined;

  @Input() userIndex: number | undefined;

  // @Output() userViewed = new EventEmitter<User>();
  @Output() userDeleted = new EventEmitter<number>();
    
  constructor() {
  }
  deleteclick() {
    this.userDeleted.emit(this.userIndex);
    // this.userViewed.emit(this.user);
  }

  ngOnInit(): void {
    // const output = {
    //   index: this.userIndex
    // }
    // console.log(output)
  }

}
