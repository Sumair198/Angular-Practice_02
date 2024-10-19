import { Component } from '@angular/core';
import {UsersDataService} from '../users-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  usersDataCom : any = ''
constructor (private userCom : UsersDataService) {
this.usersDataCom = this.userCom.getData()
}
}
