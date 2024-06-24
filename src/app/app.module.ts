import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './features/auth/auth.component';
import { EmployeeListComponent } from './features/employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './features/employee/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './features/employee/employee-detail/employee-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { EditEmployeeModalComponent } from './features/employee/edit-employee-modal/edit-employee-modal.component';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDetailComponent,
    EditEmployeeModalComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
