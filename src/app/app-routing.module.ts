import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetComponent } from './budget/budget.component';

import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AttachComponent } from './attach/attach.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },


  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  {
    path: 'attach', component: AttachComponent,
    children: [
  { path: "home", component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'employee-dashboard', component: EmployeeDashboardComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
