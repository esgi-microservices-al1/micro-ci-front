import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from '../../models/project.model';
import { UserNotification } from '../../models/userNotification.model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProjectService } from '../../services/projects.service';

@Component({
    selector: 'ci-project-details',
    templateUrl: 'project-details.component.html',
    styleUrls: ['project-details.component.scss']
})
export class ProjectDetailsComponent implements OnChanges {
    @Input() project: Project;
    @Input() users: UserNotification[];

    checkedUsers: UserNotification[] = [];

    columns: string[] = ['notified', 'id', 'name', 'username', 'email'];

    constructor(private projectService: ProjectService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.project.currentValue) {
            this.checkedUsers = [...changes.project.currentValue.notifiedUsers];
        }
    }

    isNotified(user: UserNotification) {
        return this.project.notifiedUsers.some(((x: UserNotification) => x.id === user.id));
    }

    showOptions(user: UserNotification, event: MatCheckboxChange) {
        if (event.checked) {
            this.checkedUsers.push(user);
        } else {
            this.checkedUsers.splice(this.checkedUsers.indexOf(user), 1);
        }
    }

    get updateButtonDisabled(): boolean {
        return this.project ?
            this.checkedUsers.every((x: UserNotification) => this.project.notifiedUsers.includes(x)) &&
            this.project.notifiedUsers.length === this.checkedUsers.length
        : true;
    }

    update() {
        this.project.notifiedUsers = [...this.checkedUsers];
        this.projectService.update(this.project).subscribe(
            (result: number) => result === 1 ?
                console.log('updated') :
                console.error('error')
        );
    }
}
