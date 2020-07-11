import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from '../../model';
import {CreateSchedulerComponent} from '../create-scheduler/create-scheduler.component';
import {Project} from '../../../project/model/project.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  @Output() modifySchedule = new EventEmitter();
  displayedColumns: string[] =  ['name', 'project', 'branch', 'scheduledInterval', 'startDate', 'deleteSchedule'];

  @Input() schedules: Schedule[];
  @Input() createSchedule: CreateSchedulerComponent;
  isClicked: any = false;

  currentProject: Project;

  constructor() {
    this.currentProject = JSON.parse(localStorage.getItem('selectedProject')) as Project;
  }

  ngOnInit(): void {
    console.log('project list : ' + {schedule : this.schedules});
  }

  updateSchedule(schedule) {
    this.createSchedule.updateSchedule(schedule);
  }

  deleteSchedule(schedule) {
    this.createSchedule.deleteSchedule(schedule);
  }

  parseScheduleToHuman(schedule) {
    return 'Every ' + schedule.interval.frequency + ' ' + schedule.interval.unity;
  }
}
