import {Component, Input, OnInit} from "@angular/core";
import {Schedule, ScheduleStatus} from "../../model/schedule.model";

@Component({
  selector: 'schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  displayedColumns: string[] =  ['name', 'project', 'scheduledAt', 'createdAt', 'status'];

  @Input()
  schedules: Schedule[]

  ngOnInit(): void {
    console.log({schedule : this.schedules});
  }

  getIconStatus(status: ScheduleStatus): string {
    if( status === ScheduleStatus.Awaiting ) return 'hourglass_empty';
    else if (status === ScheduleStatus.InProgress) return 'restore';
    else if (status === ScheduleStatus.Echec) return 'error';
    return 'check_circle';
  }


}
