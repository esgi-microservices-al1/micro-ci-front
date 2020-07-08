import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ci-liste-platform',
  templateUrl: './liste-platform.component.html',
  styleUrls: ['./liste-platform.component.scss']
})
export class ListePlatformComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' |'mid' |'after' = 'after';
  disabled = false;
  constructor() { }
  ngOnInit () {  }



  ngOnInit(): void {
  }



}


