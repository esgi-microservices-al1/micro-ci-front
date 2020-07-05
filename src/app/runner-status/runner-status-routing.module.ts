import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerStatusContainer} from "./container/runner-status.container";


const routes: Routes = [
  {
    path: '',
    component: RunnerStatusContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnerStatusRoutingModule { }
