import {Schedule, ScheduleModelDto, ScheduleStatus} from '../model/schedule.model';
import {Injectable} from '@angular/core';
import {User} from '../../users/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private address1 = {
    street: 'jules ferry',
    suite: '',
    city: 'Paris',
    zipcode: '75001',
    geo: {
      lat: 1.54667,
      lng: 1.54667
    }
  }
  private company1 = {
    name: 'company corp.',
    catchPhrase: 'Goog Company',
    bs: ''
  }

  private user1: User = {
      id : '1',
      address: this.address1,
       email : 'user@user.com',
      company : this.company1,
    name: 'Robert',
    username: 'RobertDu75',
    phone: '0759605948',
    website: 'http://robert.com'

  };

  private schedules: Schedule[] = [{name: 'Schedule 1', project: 'project 1', scheduledAt: new Date(),
                                    scheduledBy: this.user1, createdAt: new Date(), status: ScheduleStatus.Awaiting },
                                  {name: 'Schedule 2', project: 'project 2', scheduledAt: new Date(),
                                    scheduledBy:  this.user1, createdAt: new Date(), status: ScheduleStatus.InProgress },
                                  {name: 'Schedule 3', project: 'project 3', scheduledAt: new Date(),
                                    scheduledBy:  this.user1, createdAt: new Date(), status: ScheduleStatus.Echec },
                                  {name: 'Schedule 4', project: 'project 4', scheduledAt: new Date(),
                                    scheduledBy:  this.user1, createdAt: new Date(), status: ScheduleStatus.Success }];

  getSchedules(): Schedule[] {
    return this.schedules;
  }

  addSchedule(schedule: string[]): void {
    // this.schedules.push({name: schedule.pop(), project: schedule.pop(), scheduledAt : new Date(schedule.pop()),
    //                      scheduledBy: schedule.pop(), createdAt: schedule.pop(), scheduledAt : schedule.pop()});
  }

  sentToApi(scheduleDto: ScheduleModelDto) {

  }

}
