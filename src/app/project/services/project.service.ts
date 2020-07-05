import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:3001/project';

  constructor(private http: HttpClient) { }

  createProject(project: Project) {
    return this.http.post(this.apiUrl, project, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getAllProjects() {
    return this.http.get(this.apiUrl);
  }

  getProject(id: String) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
