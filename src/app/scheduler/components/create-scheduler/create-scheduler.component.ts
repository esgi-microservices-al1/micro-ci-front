import {Component, OnInit, NgModule, Input} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

NgModule( {

})
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'create-scheduler',
  templateUrl: './create-scheduler.component.html',
  styleUrls: ['./create-scheduler.component.scss']
})
export class CreateSchedulerComponent implements OnInit {
  scheduleForm: FormGroup;
  @Input() scheduleName: string;
  @Input() branchName: string;
  @Input() intervalUnit: string;
  @Input() frequency: bigint;
  @Input() startDate: Date;
  unitOptions = [ { name : 'Month' },
    { name : 'Week' },
    { name : 'Day' },
    { name : 'Hour' },
    { name : 'Minute' }
  ];
  textCopy: string;
  disableForm = true;

  ngOnInit(): void {
    this.setDisableForm(true);
  }

  setDisableForm(value: boolean): void {
    this.disableForm = value;
  }

  onClick(text: string): void {
    // Get all the datas and save them
    console.log('Click submit.');
    this.textCopy = 'changed to ' + text;
    this.disableForm = true;
  }

}
