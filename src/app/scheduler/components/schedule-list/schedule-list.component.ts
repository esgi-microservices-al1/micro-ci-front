import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Schedule} from '../../model/schedule.model';
import {CreateSchedulerComponent} from '../create-scheduler/create-scheduler.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  @Output() modifySchedule = new EventEmitter();
  displayedColumns: string[] =  ['name', 'project', 'branch', 'intervalUnit', 'intervalFrequency', 'startDate', 'deleteSchedule'];

  @Input() schedules: Schedule[];
  @Input() createSchedule: CreateSchedulerComponent;
  isClicked: any = false;
  selectedRow: number;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log({schedule : this.schedules});
  }

  updateSchedule(schedule) {
    this.createSchedule.updateSchedule(schedule);
  }

  deleteSchedule(schedule) {
    this.createSchedule.deleteSchedule(schedule);
  }
}
