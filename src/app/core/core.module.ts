import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { EmployeeRepository } from './repository/employee.repository';
import { EmployeeService } from './service/employee.service';


const DATA_SERVICE: Provider[] = [
  { provide: EmployeeRepository, useClass: EmployeeService }
];

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...DATA_SERVICE]
    };
  }
}
