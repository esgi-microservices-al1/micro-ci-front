import { Component, OnInit, Input, Output, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project, Command, Commands } from '../../model/commande.model';
import { CommandService } from '../../services/command.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'ci-command-details',
  templateUrl: './command-details.component.html',
  styleUrls: ['./command-details.component.scss']
})
export class CommandDetailsComponent implements OnInit, OnChanges {
  @Input() project: Project;

  historiqueCommands: Commands[];
  text: string;
  commandInfo: Command;
  refresh: boolean;
  valid: boolean;
  // commandList:Command[];

  // commandForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private commandeService: CommandService) {
  }

  ngOnInit() {
    this.text = '';
    this.valid = false;
    this.project = null;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'project':
            if (this.valid === true) {
            this.serviceGetCommands(this.project.project_id);
            }
            break;
          case 'valid':
            if (this.valid === true) {
              this.text = '';
            }
            break;
        }
      }
    }
  }

  getTextInputValue(event: string) {
    this.text = event;
    console.log('Textarea: ' + this.text);
  }

  sendCommandTipped(event: any) {
    if (this.text.length > 2) {
      const caseStdoutFalseArray = ['cd ', 'CD ', 'mkdir ', 'MKDIR ', 'cp ', 'CP ' ];
      if (caseStdoutFalseArray.includes(this.text.substring(0, 3))) {
        this.commandInfo = {
          command: this.text,
          stdout: false,
        };
      }
      this.commandInfo = {
          command: this.text,
          stdout: true
        };
      console.log('Project: ' + this.project.project_id + ' ' + this.project);
      console.log('Commande: for' + this.project.project_id  + ' is ' + this.commandInfo.command);
      this.commandeService.MicroserviceRest_CommandPOST(this.commandInfo, this.project.project_id)
      .subscribe(
        data => {
          this.valid = true;
        },
        err => {
        console.error('command Post err: ' +  err);
      });
      this.serviceGetCommands(this.project.project_id);
    }
  }
  serviceGetCommands(id: number) {
    this.commandeService.MicroserviceRest_CommandGET(this.project.project_id)
    .subscribe(
      commands => {
        this.historiqueCommands = [...commands];
        console.log('Histo commands: ' +  this.historiqueCommands);
      },
      err => {
        console.error('Project Get err: ' +  err);
      }
    );
  }

}
