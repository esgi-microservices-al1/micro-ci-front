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

  // Manage Observable cancellation when component is destroyed : https://alligator.io/angular/takeuntil-rxjs-unsubscribe/
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        users => this.users = [...users],
        error => console.error(error)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getSelectedUser(event: User): void {
    this.selectedUser = event;
  }

}
