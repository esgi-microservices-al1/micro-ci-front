import { Project, Command } from 'src/app/commands/model/commande.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommandService } from 'src/app/commands/services/command.service';
import { OnDestroy, OnInit, Component } from '@angular/core';

@Component({
    templateUrl:'./projectcommand.container.html'
  })
  export class ProjectcommandContainer implements OnInit, OnDestroy {
  
    projects: Project[];
    selectedProject: Project;
  
    // Manage Observable cancellation when component is destroyed : https://alligator.io/angular/takeuntil-rxjs-unsubscribe/
    private destroy$: Subject<boolean> = new Subject<boolean>();
  
    constructor(
      private commandeService: CommandService
    ) { }
  
    ngOnInit(): void {
      this.commandeService.MicroserviceRest_ProjectsGET()
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          projects => {
            this.projects = [...projects];  
          },
          err => console.error("Project Get err: " +  err)
        );
    }
  
    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.complete();
    }
  
    getSelectedProject(event: Project): void {
      this.selectedProject = event;
    }
  
  }
  