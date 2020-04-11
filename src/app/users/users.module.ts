import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { UsersContainer } from './container/users.container';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    UsersContainer,

    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UsersModule { }
