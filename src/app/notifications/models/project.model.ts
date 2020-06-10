import {UserNotification} from './userNotification.model';

export interface Project {
  id: number;
  name: string;
  notifiedUsers?: UserNotification[];
}
