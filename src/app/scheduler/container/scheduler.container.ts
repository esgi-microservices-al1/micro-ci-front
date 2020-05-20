import {Component, OnInit} from '@angular/core';
import {Schedule} from '../model/schedule.model';
import {SchedulerService} from '../services/scheduler.service';


@Component({
  templateUrl: './scheduler.container.html'
})
export class SchedulerContainer implements OnInit {
  schedules: Schedule[];

  constructor(private schedulerService: SchedulerService ) {

  }

  ngOnInit(): void {
    this.schedules = this.schedulerService.getSchedules();
  }
}
