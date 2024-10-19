import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'
import { AdminComponent } from './admin/admin.component'
import { NotFoundComponent } from './not-found/not-found.component'
import {LoginComponent} from './employee/login/login.component'
import {SignupComponent} from './employee/signup//signup.component'

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
