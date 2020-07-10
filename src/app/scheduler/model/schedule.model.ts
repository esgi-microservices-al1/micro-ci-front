import {IntervalModel} from './interval.model';

export interface Schedule {
  id?: string;
  name: string;
  project: string; // project name or Object
  branch: string;
  interval: IntervalModel;
  startDate: Date;
}

export class ScheduleModelDto {

  constructor(schedulerName, projectName, projectBranch, interval, startDate) {
    this.name = schedulerName;
    this.project = projectName ;
    this.branch = projectBranch ;
    this.interval = interval ;
    this.startDate = startDate ;
  }
  name: string;
  project: string;
  branch: string;
  interval: IntervalModel;
  startDate: Date;

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
