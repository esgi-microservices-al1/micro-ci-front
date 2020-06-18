import {Schedule, ScheduleModelDto, ScheduleStatus} from '../model/schedule.model';
import {Injectable} from '@angular/core';
import {User} from '../../users/model/user.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

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

  constructor(private httpClient: HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control' : 'no-cache',
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':  'http://127.0.0.1:5000'
    })
  };

  getSchedules(): Schedule[] {
    return this.schedules;
    //fill with the url
    //return this.httpClient.get('https://')
  }

  addSchedule(schedule: string[]): void {
    // this.schedules.push({name: schedule.pop(), project: schedule.pop(), scheduledAt : new Date(schedule.pop()),
    //                      scheduledBy: schedule.pop(), createdAt: schedule.pop(), scheduledAt : schedule.pop()});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  postSchedule(scheduleDto: ScheduleModelDto) {
    return this.httpClient.post<ScheduleModelDto>('http://localhost:5000/schedule', scheduleDto, this.httpOptions);
  }

}
