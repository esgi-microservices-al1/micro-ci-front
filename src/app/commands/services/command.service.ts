import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, Command, Commands } from 'src/app/commands/model/commande.model';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  API_URL = '/commands-service';
  httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control' : 'no-cache',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    // this.basurl = "http://localhost:8080";
    // this.basurl = 'http://micro-ci.westus2.cloudapp.azure.com:40501/al1.commands-ci';
  }

  MicroserviceRest_ProjectsGET(): Observable<Project[]> {
    return this.http.get<Project[]>('/al1.commands-ci/api/v1/projects');
  }

  MicroserviceRest_CommandPOST(command: Command, projectId: number): Observable<Commands> {
    const myproject: Project = {
        project_id: projectId
      };
    const mycommands = new Array<Command>();
    mycommands[0] = command;

    const commmandPost: Commands = {
      commands: mycommands,
      project: myproject
    };
    return this.http.post<Commands>( this.API_URL + '/al1.commands-ci/api/v1/commands/add', commmandPost, this.httpOptions);
  }

  MicroserviceRest_CommandGET(projectid: number): Observable<Commands[]> {
    return this.http.get<Commands[]>( this.API_URL + '/al1.commands-ci/api/v1/commands/filter?id=' + projectid, this.httpOptions);
  }

}
