import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ci-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() count: number;
  constructor() { }

  ngOnInit(): void {
  }

}
