import {SchedulerContainer} from './container/scheduler.container';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {ScheduleListComponent} from './components/schedule-list/schedule-list.component';
import { CreateSchedulerComponent } from './components/create-scheduler/create-scheduler.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {SchedulerService} from './services/scheduler.service';



@NgModule({
  declarations: [
    SchedulerContainer,
    ScheduleListComponent,
    CreateSchedulerComponent,
  ],
  imports: [
    SharedModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    SchedulerService
  ]
})
export class SchedulerModule { }
