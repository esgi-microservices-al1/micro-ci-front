import {Component, Input, OnInit} from '@angular/core';
import {RunnerStatus} from '../../models/runner.status';
import {Router} from '@angular/router';

@Component({
  selector: 'ci-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {

  columns: string[] = ['projectId', 'imageId', 'upTime'];
  @Input() runningImages: RunnerStatus[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectProject(projectId: number): void {
    this.router.navigate(['project/' + projectId]);
  }

}
