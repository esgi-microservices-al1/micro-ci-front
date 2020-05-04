import {Component, Input, OnInit} from "@angular/core";
import {Schedule, ScheduleUnity} from "../../model/schedule.model";

@Component({
  selector: 'schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  displayedColumns: string[] =  ['name', 'project', 'branch','scheduledBy', 'scheduledAt', 'frequency'];

  @Input()
  schedules: Schedule[]

  ngOnInit(): void {
    console.log({schedule : this.schedules});
  }

  frequencyText(scheduleUnity :ScheduleUnity, frequency: number): string {
    let unity;
    if( scheduleUnity == ScheduleUnity.Day) {
      unity = 'jour(s)'
    } else if (scheduleUnity == ScheduleUnity.Hour ) {
      unity = 'heure(s)'
    } else if (scheduleUnity == ScheduleUnity.Minute ) {
      unity = 'minute(s)'
    } else if (scheduleUnity == ScheduleUnity.Week ) {
      unity = 'semaine(s)'
    } else {
      unity = 'moi(s)'
    }
    return `tous les ${ frequency > 1 ? frequency : ''} ${unity}`;
  }


}
