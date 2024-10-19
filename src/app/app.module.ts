import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomstyleDirective } from './customstyle.directive';
import {EmployeeModule} from './employee/employee.module'
import {StudentModule} from './student/student.module'
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    NotFoundComponent,
    CustomstyleDirective,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    StudentModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
