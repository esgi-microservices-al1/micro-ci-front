import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RunnerStatus} from '../models/runner.status';

@Injectable({
  providedIn: 'root'
})
export class RunnerStatusService {

  constructor(private http: HttpClient) {
  }

  getStatus(): Observable<{datas: RunnerStatus[]}> {
    return this.http.get<{datas: RunnerStatus[]}>('/runner-service/stats');
  }
}
