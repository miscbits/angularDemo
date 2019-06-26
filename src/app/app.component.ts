import { Component } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngularProject';
  // user = new User('smithy', 'smith@gmail.com', 'Agent Smith', true);

  userList = [
      new User('smithy', 'smith@gmail.com', 'Agent Smith', true),
      new User('miscbits', 'wilhem@zipcodewilmington.com', 'Wilhem', true),
      new User('dantheman', 'dan@email.com', 'Dan', true),
      new User('spambot3767', 'spambot@email.com', 'Bob Smith', false),
      new User('ash1999', 'ashley@email.com', 'Ashley', true),
      new User('jays0n', 'jason@email.com', 'Jason', false),
  ];
}
