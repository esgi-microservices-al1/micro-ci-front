import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ɵROUTER_PROVIDERS } from '@angular/router';

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

  buildRoute(){

    this.router.navigate(['/build']);
  }
  usersRoute(){

    this.router.navigate(['/users']);
  }
}
