
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'ci-liste-platform',
  templateUrl: './liste-platform.component.html',
  styleUrls: ['./liste-platform.component.scss']
})
export class ListePlatformComponent implements OnInit {


  form: FormGroup;
  Data: Array<any> = [
    { name: 'Github', value: 'github' },
    { name: 'GitLab', value: 'gitlab' },
    { name: 'Bitbucket', value: 'bitbucket' },
  ];
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    })
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value)
  }
  // ngOnInit () {  }



  ngOnInit(): void {
  }



}

export class AppComponent  {

}

