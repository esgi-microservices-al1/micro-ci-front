import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../model/user.model';

@Component({
  templateUrl: './users.container.html'
})
export class UsersContainer implements OnInit, OnDestroy {

  users: User[];
  selectedUser: User;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        value => this.users = value,
        error => console.error(error)
      );
  }

  getSelectedUser(event) {
    this.selectedUser = event;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
