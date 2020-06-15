import {SchedulerContainer} from './container/scheduler.container';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {ScheduleListComponent} from './components/schedule-list/schedule-list.component';
import { CreateSchedulerComponent } from './components/create-scheduler/create-scheduler.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    SchedulerContainer,

    ScheduleListComponent,

    CreateSchedulerComponent
  ],
  imports: [
    SharedModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class SchedulerModule { }
