import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() userList: User[];

  constructor() { }

  ngOnInit() {
  }

  delete(user: User): void {
     this.userList = this.userList.filter((filteredUser) => {
         return filteredUser !== user;
         // Todo remove this from a database on your backend
     });
  }

  verify(user: User): void {
      this.userList.map((mappedUser) => {
          if (user === mappedUser) {
              mappedUser.verified = true;
          }
          return mappedUser;
      });
  }

}
