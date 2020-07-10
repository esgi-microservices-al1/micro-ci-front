import { Component, OnInit } from '@angular/core';
import {Project} from '../../../../project/model/project.model';



// @ts-ignore
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'schedule.test',
  templateUrl: './schedule.test.component.html',
  styleUrls: ['./schedule.test.component.scss']
})
// tslint:disable-next-line:align no-unused-expression component-class-suffix
export class ScheduleTestComponent implements OnInit {

  branch = ['branch1', 'branch2'];

// tslint:disable-next-line:max-line-length
proj1 = {_id: '1', label: 'myProject1', git_url: 'https://toto.git', access_token: 'eeee', enable: true, git_host: 'github', branches: this.branch} as Project;
// tslint:disable-next-line:max-line-length
proj2 = {_id: '2', label: 'myProject2', git_url: 'https://toto.git', access_token: 'eeee', enable: true, git_host: 'github', branches: ['branch1']} as Project;
// tslint:disable-next-line:max-line-length
proj3 = {_id: '3', label: 'myProject3', git_url: 'https://toto.git', access_token: 'eeee', enable: true, git_host: 'github', branches: ['branch1']} as Project;



toto = [this.proj1, this.proj2, this.proj3] as Array<Project>;


// tslint:disable-next-line:variable-name



constructor() { }

ngOnInit(): void {
  }

}


