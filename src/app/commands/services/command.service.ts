import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from 'src/app/commands/model/commande.model';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  headers:any;
  basurl:string;
  urlProject = this.basurl+"/api/v1/projects";

  datas:Project[];
  constructor(private http: HttpClient) { 

    this.basurl = "http://localhost:8080";
    this.headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }
  MicroserviceRest_ProjectsGET():Observable<Project[]>{
   
    return this.http.get<Project[]>( "http://localhost:8080/api/v1/projects");
  }

}
