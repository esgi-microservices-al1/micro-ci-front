import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunnerStatusContainer } from './container/runner-status.container';
import {RunnerStatusRoutingModule} from './runner-status-routing.module';
import { CounterComponent } from './components/counter/counter.component';
import {SharedModule} from '../shared';
import { ProcessListComponent } from './components/process-list/process-list.component';
import { ServiceRunnerErrorComponent } from './components/service-error/service-runner-error.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [RunnerStatusContainer, CounterComponent, ProcessListComponent, ServiceRunnerErrorComponent],
  imports: [
    CommonModule,
    RunnerStatusRoutingModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class RunnerStatusModule { }
