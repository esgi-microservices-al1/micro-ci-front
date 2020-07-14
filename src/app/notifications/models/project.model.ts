import {UserNotification} from './userNotification.model';

export interface Project {
  id: string;
  name: string;
  notifiedUsers: UserNotification[];
}
