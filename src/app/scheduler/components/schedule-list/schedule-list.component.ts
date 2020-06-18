import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Schedule, ScheduleStatus} from '../../model/schedule.model';
import {CreateSchedulerComponent} from '../create-scheduler/create-scheduler.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  displayedColumns: string[] =  ['name', 'project', 'branch', 'startDate'];

  @Input()
  schedules: Schedule[];

  @Input()
  createSchedule: CreateSchedulerComponent;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log({schedule : this.schedules});
  }

  setDisableForm() {
    this.createSchedule.setDisableForm(false);
  }

}
