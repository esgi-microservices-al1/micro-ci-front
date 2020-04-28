import {SchedulerContainer} from "./container/scheduler.container";
import {NgModule} from "@angular/core";
import {SharedModule} from "../shared";
import {ScheduleListComponent} from "./components/schedule-list/schedule-list.component";


@NgModule({
  declarations: [
    SchedulerContainer,

    ScheduleListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SchedulerModule { }
