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

  displayedColumns: string[] =  ['name', 'project', 'scheduledBy', 'scheduledAt', 'createdAt', 'status'];

  @Input()
  schedules: Schedule[]

  @Input()
  createSchedule: CreateSchedulerComponent;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log({schedule : this.schedules});
  }

  setDisableForm(value: boolean) {
    this.createSchedule.setDisableForm(value);
  }

  getIconStatus(status: ScheduleStatus): string {
    if ( status === ScheduleStatus.Awaiting ) {
      return 'hourglass_empty';
    } else if (status === ScheduleStatus.InProgress) {
      return 'restore';
    } else if (status === ScheduleStatus.Echec) {
      return 'error';
    }
    return 'check_circle';
  }

}
