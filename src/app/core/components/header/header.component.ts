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

  webhookRoute() {

    this.router.navigate(['/webhook']);
  }

  usersRoute() {

    this.router.navigate(['/']);
  }
}
