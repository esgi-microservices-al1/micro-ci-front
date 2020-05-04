import {Schedule, ScheduleUnity} from "../model/schedule.model";
import {Injectable} from "@angular/core";
import {User} from "../../users/model/user.model";


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


  private schedules: Schedule[] = [{ name: 'Schedule 1', project: 'porject 1', branch: 'master',
                                      scheduledAt: new Date(),
                                      scheduledBy: this.user1,
                                      interval: { unity: ScheduleUnity.Day,
                                        frequency: 2}
                                    },
                                  {name: 'Schedule 2', project: 'porject 2', branch: 'master',
                                    scheduledAt: new Date(),
                                    scheduledBy: this.user1,
                                    interval: { unity: ScheduleUnity.Hour,
                                                frequency: 2}
                                  },
                                  {name: 'Schedule 3', project: 'porject 3', branch: 'master',
                                    scheduledAt: new Date(),
                                    scheduledBy: this.user1,
                                    interval: { unity: ScheduleUnity.Week,
                                      frequency: 2}
                                  },
                                  {name: 'Schedule 4', project: 'porject 4', branch: 'master',
                                    scheduledAt: new Date(),
                                    scheduledBy: this.user1,
                                    interval: { unity: ScheduleUnity.Minute,
                                      frequency: 2}
                                  }];

  getSchedules(): Schedule[] {
    return this.schedules;
  }

}
