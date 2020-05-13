import { Component, Input } from "@angular/core";
import { Project } from '../../models/project.model';

@Component({
    selector: 'projects-list',
    templateUrl: './projects-list.html',
    styleUrls: ['./projects-list.scss']
})
export class ProjectsListComponent{
    @Input('projects') projects: Project[] = [];

}