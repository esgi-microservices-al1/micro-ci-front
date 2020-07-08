import {Schedule, ScheduleModelDto} from '../model/schedule.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  API_URL = '/ms-scheduler';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control' : 'no-cache',
      'Content-Type':  'application/json',
    })
  };

  getSchedules(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(this.API_URL + '/schedule');
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
    return this.httpClient.post<ScheduleModelDto>(this.API_URL + '/schedule', scheduleDto, this.httpOptions);
  }

  updateSchedule(scheduleId: string, scheduleDto: ScheduleModelDto) {
    return this.httpClient.put<ScheduleModelDto>(this.API_URL + '/schedule/' + scheduleId, scheduleDto);
  }

  deleteSchedule(scheduleId) {
    return this.httpClient.delete<string>(this.API_URL + '/schedule/' + scheduleId);
  }
}
