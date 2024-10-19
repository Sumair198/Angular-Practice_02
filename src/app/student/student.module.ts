import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentdataComponent } from './studentdata/studentdata.component';



@NgModule({
  declarations: [
    StudentdataComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    StudentdataComponent
  ]
})
export class StudentModule { }
