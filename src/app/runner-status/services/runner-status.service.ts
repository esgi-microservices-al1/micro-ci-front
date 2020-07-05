import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {RunnerStatus} from "../models/runner.status";

@Injectable({
  providedIn: 'root'
})
export class RunnerStatusService {

  constructor(private http: HttpClient) {
  }

  getStatus(): Observable<RunnerStatus[]> {
    return of([
      {projectId: 231, imageId: 'azer234E6765uyguiguih767', upTime: 'hehe'},
      {projectId: 121, imageId: 'azer234Eftyuyubiguih767', upTime: 'hehe'},
      {projectId: 31, imageId: 'azer234E6765uknonknnuiuh767', upTime: 'hehe'},
      {projectId: 23, imageId: 'azer234E6765uyguiguih767', upTime: 'hehe'}
    ]);
    // return this.http.get<RunnerStatus[]>("hehe");
  }
}
