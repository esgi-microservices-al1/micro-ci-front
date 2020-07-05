import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunnerStatusContainer } from './container/runner-status.container';
import {RunnerStatusRoutingModule} from "./runner-status-routing.module";
import { CounterComponent } from './components/counter/counter.component';
import {SharedModule} from "../shared";
import { ProcessListComponent } from './components/process-list/process-list.component';



@NgModule({
  declarations: [RunnerStatusContainer, CounterComponent, ProcessListComponent],
  imports: [
    CommonModule,
    RunnerStatusRoutingModule,
    SharedModule
  ]
})
export class RunnerStatusModule { }
