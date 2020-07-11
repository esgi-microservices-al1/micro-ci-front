import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import {Process} from '../model/Process';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'ci-events-build',
  templateUrl: './events-build.component.html',
  styleUrls: ['./events-build.component.scss']
})
export class EventsBuildComponent implements OnInit {

  processList: Process[];

  datasource: MatTableDataSource<Process>;
  displayColumns: string[] = ['id', 'command', 'output', 'status'];

  constructor(private eventService: EventService) { }


  ngOnInit(): void {
    this.processList = this.eventService.getAllBuilds();
    this.datasource = new MatTableDataSource(this.processList);
  }

}
