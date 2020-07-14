import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = '/projects-service/project';
  // private apiUrl = 'http://micro-ci.westus2.cloudapp.azure.com:40501/al1.projects-ci/project';

  constructor(private http: HttpClient) { }

  createProject(project: Project) {
    return this.http.post(this.apiUrl, project, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getAllProjects() {
    return this.http.get(this.apiUrl);
  }

  getProject(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getBranches(projectId: string) {
    return this.http.get(`${this.apiUrl}/branches/${projectId}`);
  }
}
