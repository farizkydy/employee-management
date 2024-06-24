import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { AddEmployeeComponent } from './features/employee/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './features/employee/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './features/employee/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthComponent
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
