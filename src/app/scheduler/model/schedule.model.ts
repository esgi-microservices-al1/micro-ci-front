import {User} from '../../users/model/user.model';
import {IntervalModel} from './interval.model';

export interface Schedule {
  name: string;
  project: string; // project name or Object
  scheduledAt: Date;
  scheduledBy: User;
  status: ScheduleStatus;
  createdAt: Date;
}

export enum ScheduleStatus {
  Awaiting = 'Awaiting',
  InProgress = 'In Progress',
  Success = 'Success',
  Echec = 'Echec'
}

export class ScheduleModelDto {
  schedulerName: string;
  projectName: string;
  projectBranch: string;
  interval: IntervalModel;
  startDate: Date;

  constructor(schedulerName, projectName, projectBranch, interval, startDate) {
    this.schedulerName = schedulerName;
    this.projectName = projectName ;
    this.projectBranch = projectBranch ;
    this.interval = interval ;
    this.startDate = startDate ;
  }

  toString() {
    return JSON.stringify(this) ;
  }


}
/*
{
  name: String,     //unique
  project : String, // ID ?
  branch : String, // ID ?
  interval : {
     unity : String // ['Month','week','Day', 'Hour', 'Minute'
     frequency : Number
  }
  startDate: Date
}
 */
