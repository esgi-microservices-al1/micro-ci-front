import { Component, OnInit, Input, Output, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Project, Command, Commands, Status } from '../../model/commande.model';
import { CommandService } from '../../services/command.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'ci-command-details',
  templateUrl: './command-details.component.html',
  styleUrls: ['./command-details.component.scss']
})
export class CommandDetailsComponent implements OnInit, OnChanges{

  @Input() project: Project;

  historiqueCommands:Commands[];

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
            this.serviceGetCommands(this.project.project_id);
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
      let caseStdoutFalseArray = ["cd ", "CD ","mkdir ","MKDIR ", "cp ", "CP"];
      if(caseStdoutFalseArray.includes(this.text.substring(0, 3))){
        this.commandInfo = {
          command: this.text,
          stdout: false,        
          //projectid: this.project.project_id
        };
      }
      this.commandInfo = {
          command: this.text,
          stdout: true,        
          //projectid: this.project.project_id
        };
      console.log("Project: "+this.project.project_id +" "+ this.project);
      console.log("Commande: for"+this.project.project_id  + " is " + this.commandInfo.command);
      this.commandeService.MicroserviceRest_CommandPOST(this.commandInfo, this.project.project_id)
      .subscribe(
        err => {
        if(err == null){
          this.text = "";
        }
          console.error("command Post err: " +  err)
        }

      );
    }
  }
  serviceGetCommands(id:number){
    this.commandeService.MicroserviceRest_CommandGET(this.project.project_id)
    .subscribe(
      c => {
        this.historiqueCommands =[...c];
        c.forEach(e=> {
           console.log("histo commands Get: (project: "+e.process_id +") ");
           console.log("histo commands Get: (commandes: "+e.commands +") ");
           console.log("histo commands Get: (create_date: "+e.project +") ");
        });
       // console.log("histo commands Get: (project: "+ this.project.project_id +") " + c.commands) 
      },
      err => console.error("Project Get err: " +  err)
    );
      console.log("Histo commands: " +  this.historiqueCommands);
  }

}
