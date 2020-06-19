import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = "http://localhost:3001/project";

  constructor(private http: HttpClient) { }

  createProject(project) {

    return this.http.post(this.apiUrl, project, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
