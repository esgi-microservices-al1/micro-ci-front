import {Schedule, ScheduleModelDto} from '../model/schedule.model';
import {Injectable} from '@angular/core';
import {User} from '../../users/model/user.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Project} from "../model/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_URL = 'http://localhost:5000/';  // TODO: change with the prod add

  constructor(private httpClient: HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control' : 'no-cache',
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':  'http://127.0.0.1:5000' // TODO: change with the prod add
    })
  };

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.API_URL + 'schedule'); // TODO: change with the prod route
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
  }
