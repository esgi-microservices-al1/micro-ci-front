import {Schedule, ScheduleModelDto, ScheduleStatus} from '../model/schedule.model';
import {Injectable} from '@angular/core';
import {User} from '../../users/model/user.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from 'rxjs';

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

  constructor(private httpClient: HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control' : 'no-cache',
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':  'http://127.0.0.1:5000'
    })
  };

  getSchedules(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>('http://localhost:5000/schedule');
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
