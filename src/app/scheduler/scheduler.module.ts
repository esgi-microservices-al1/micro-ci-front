import {SchedulerContainer} from './container/scheduler.container';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {ScheduleListComponent} from './components/schedule-list/schedule-list.component';
import { CreateSchedulerComponent } from './components/create-scheduler/create-scheduler.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    SchedulerContainer,

    ScheduleListComponent,

    CreateSchedulerComponent
  ],
  imports: [
    SharedModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class SchedulerModule { }
