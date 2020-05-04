import {User} from "../../users/model/user.model";

export interface Schedule {
  name: string,
  project : string, // project name or Object
  branch: string,
  scheduledBy : User,
  interval: {
    unity: ScheduleUnity,
    frequency: number
  }
  scheduledAt : Date
}


export enum ScheduleUnity {
  Month = 'Month',
  Week = 'Week',
  Day = 'Day',
  Hour = 'Hour',
  Minute = 'Minute'
}
