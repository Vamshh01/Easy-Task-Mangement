import { Component, Input, signal, input, computed, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


// type User = {

//   id: string;
//   name: string;
//   avatar: string;

// } we can also use this type and the interface no problem the only difference is the = symbol 



@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter()


  // we can do this whole thing using the signals also like 

  // avatar = input.required<string>()
  // name = input.required<string>()  // we are passing it now like this using signals this will work the same


  // get imagePath() {
  //   return 'assets/users/' + this.avatar;

  // } we don't use this getter in while dealing with signals 

  get imagePath() {
    return "assets/users/" + this.user.avatar;

  }

  onSelectUser() {

    this.select.emit(this.user.id)

  }







}
