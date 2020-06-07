import { Component, OnInit, Input, Output, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Project, Command, Status } from '../../model/commande.model';
import { CommandService } from '../../services/command.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'ci-command-details',
  templateUrl: './command-details.component.html',
  styleUrls: ['./command-details.component.scss']
})
export class CommandDetailsComponent implements OnInit, OnChanges{

  @Input() project: Project;

  historiqueCommands:Command[];


  text: string;
  commandInfo:Command;
  status:boolean;

  constructor(private commandeService: CommandService){
  }
    
  ngOnInit(){ 
    this.text ="";
  }

  ngOnChanges(changes:SimpleChanges){
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'project': {
            if(changes.project != null)
            this.serviceGetCommands(this.project.id);
          }
        }
      }
    }
  }

  getTextInputValue(event:string){
    this.text = event;
    console.log("Textarea: " + this.text)
  }

  sendCommandTipped(event:any){
    if(this.text.length > 2){
      this.commandInfo = {
        command: this.text,
        affichable: true,
        projectid: this.project.id
      };
      console.log("Project: "+this.project.id +" "+ this.project.name);
      console.log("Commande: "+this.commandInfo.projectid + " " + this.commandInfo.command);
      this.commandeService.MicroserviceRest_CommandPOST(this.commandInfo)
      .subscribe(
        s => this.status =s,
        err => console.error("command Post err: " +  err)
      );
    }
  }
  serviceGetCommands(id:number){
    this.commandeService.MicroserviceRest_CommandGET(this.project.id)
    .subscribe(
      commands => {
        this.historiqueCommands = [...commands];  
        console.log("histo commands Get: (project: "+ this.project.id +") " + this.historiqueCommands) 
      },
      err => console.error("Project Get err: " +  err)
    );
      console.log("Histo commands: " + this.historiqueCommands);
  }

}
