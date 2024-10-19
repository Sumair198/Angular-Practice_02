import { Component } from '@angular/core';
import {UsersDataService} from './users-data.service';
import {PersonsDataService} from './persons-data.service';
import { dataType } from './structure';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-2';
  name = "Sumair ul haq"
  today = Date.now()
  val = 100
emitedValue =''
  parentFunc(data: any) {
    console.log(data)
    this.emitedValue = data
  }
  usersValue : any = ''
  personData : any = [];
  constructor(private users:UsersDataService, private person:PersonsDataService) { 
    console.log(this.users.getData())
    this.usersValue = this.users.getData()

    this.person.getpersonsData().subscribe((items: any)=>{
      console.log(items)
      this.personData = items;
    })
  }

  testingModel()
  {
    const data:dataType = {
      name:'sumair',
      id : 24,
      pakistani : true,
      address : 'Malir karachi 2'
    }
    return data
  }


}
