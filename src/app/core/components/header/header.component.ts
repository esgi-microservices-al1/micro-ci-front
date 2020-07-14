import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  eventsRoute() {

    this.router.navigate(['/events']);
  }
  usersRoute() {

    this.router.navigate(['/']);
  }
  statusRoute() {
    this.router.navigate(['/status']);
  }
}
