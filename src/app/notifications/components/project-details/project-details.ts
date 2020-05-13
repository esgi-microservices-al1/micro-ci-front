import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
    selector: 'ci-project-details',
    templateUrl: 'project-details.html',
    styleUrls: ['project-details.scss']
})
export class ProjectDetailsComponent {
    @Input() project: Project;
}
