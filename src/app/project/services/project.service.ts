import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  createProject(project) {
    return console.log(project.value);
  }
}
