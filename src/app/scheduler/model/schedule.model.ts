import {User} from "../../users/model/user.model";

export interface Schedule {
  name: string,
  project : string, // project name or Object
  scheduledAt : Date,
  scheduledBy : User,
  status: ScheduleStatus,
  createdAt : Date,
}

export enum ScheduleStatus {
  Awaiting = 'Awaiting',
  InProgress = 'In Progress',
  Success = 'Success',
  Echec = 'Echec'
}
