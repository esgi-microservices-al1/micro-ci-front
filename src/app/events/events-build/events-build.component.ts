import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event-service.service";
import {Process} from "../Process";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-events-build',
  templateUrl: './events-build.component.html',
  styleUrls: ['./events-build.component.scss']
})
export class EventsBuildComponent implements OnInit {

  processList : Process[];

  datasource : MatTableDataSource<Process>;
  displayColumns : string[] = ["_id", "_command", "_output","_status"];

  constructor(private eventService : EventService) { }


  ngOnInit(): void {
    this.processList = this.eventService.getAllBuils();
    this.datasource = new MatTableDataSource(this.processList)
  }

}
