import { Component, Input } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'ci-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  @Input() user: User;

}
