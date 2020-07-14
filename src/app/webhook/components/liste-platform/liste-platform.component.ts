
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ci-liste-platform',
  templateUrl: './liste-platform.component.html',
  styleUrls: ['./liste-platform.component.scss']
})
export class ListePlatformComponent implements OnInit {


  checked: boolean;
  @Output() changed = new EventEmitter<boolean>();
  constructor() { }
  // ngOnInit () {  }



  ngOnInit(): void {
  }



}

export class AppComponent  {

}

