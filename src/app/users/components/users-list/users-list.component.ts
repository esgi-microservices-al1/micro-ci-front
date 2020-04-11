import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'ci-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  columns: string[] = ['id', 'name', 'email', 'phone'];

  @Input()
  users: User[];

  @Output()
  selectedUser: EventEmitter<User> = new EventEmitter<User>();

  selectUser(user: User) {
    this.selectedUser.emit(user);
  }

}
