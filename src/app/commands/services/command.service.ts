import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, Command } from 'src/app/commands/model/commande.model';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  headers = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  basurl:string;
  urlProject = this.basurl+"/api/v1/projects";

  constructor(private http: HttpClient) { 
    this.basurl = "http://localhost:8080";
  }

  MicroserviceRest_ProjectsGET():Observable<Project[]>{
    return this.http.get<Project[]>(this.basurl+"/api/v1/projects");
  }

  MicroserviceRest_CommandPOST(command:Command):Observable<any>{
    return this.http.post<any>( this.basurl+"/api/v1/commands",command,this.headers);
  }

  MicroserviceRest_CommandGET(projectid:number):Observable<Command[]>{
    return this.http.post<Command[]>( this.basurl+"/api/v1/commands/command/"+projectid,this.headers);
  }

}
