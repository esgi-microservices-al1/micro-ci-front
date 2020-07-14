import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, Command, Commands } from 'src/app/commands/model/commande.model';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  basurl: string;

  constructor(private http: HttpClient) {
    // this.basurl = "http://localhost:8080";
    this.basurl = 'http://micro-ci.westus2.cloudapp.azure.com:40501/al1.commands-ci';
  }

  MicroserviceRest_ProjectsGET(): Observable<Project[]> {
    return this.http.get<Project[]>(this.basurl + '/api/v1/projects/');
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
    return this.http.post<Commands>( this.basurl + '/api/v1/commands/add', commmandPost, this.headers);
  }

  MicroserviceRest_CommandGET(projectid: number): Observable<Commands[]> {
    return this.http.get<Commands[]>( this.basurl + '/api/v1/commands/filter?id=' + projectid, this.headers);
  }

}
