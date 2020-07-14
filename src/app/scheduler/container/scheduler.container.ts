import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Schedule} from '../model';
import {SchedulerService} from '../services/scheduler.service';
import {Project} from '../../project/model/project.model';
import {Router} from '@angular/router';


@Component({
  templateUrl: './scheduler.container.html'
})
export class SchedulerContainer implements OnInit {

  schedules: Schedule[];
  project: Project;

  constructor(private schedulerService: SchedulerService,
              private changeDetectorRefs: ChangeDetectorRef,
              private router: Router) {
    this.project = JSON.parse(localStorage.getItem('selectedProject')) as Project;
    // TODO add guard for this
    if ( this.project == null ) {
      this.router.navigateByUrl('/');
    }
    console.log('this.project : ' , this.project);

  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    console.log('getting schedules...');
    this.schedulerService.getSchedulesByProject(this.project._id).subscribe((res) => {
      this.schedules = res; // TODO : filter only @Input project's schedules
      console.log('got new schedules ! : ', res, ' , now updating component');
      this.changeDetectorRefs.detectChanges();
    });
  }
}
