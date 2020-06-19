import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Schedule} from '../model/schedule.model';
import {SchedulerService} from '../services/scheduler.service';
import {CreateSchedulerComponent} from '../components/create-scheduler/create-scheduler.component';


@Component({
  templateUrl: './scheduler.container.html'
})
export class SchedulerContainer implements OnInit {
  schedules: Schedule[];

  constructor(private schedulerService: SchedulerService, private changeDetectorRefs: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    console.log('getting schedules...');
    this.schedulerService.getSchedules().subscribe((res) => {
      this.schedules = res; // TODO : filter only connected user's schedules
      console.log('got new schedules ! : ', res, ' , now updating component');
      this.changeDetectorRefs.detectChanges();
    });
  }
}
