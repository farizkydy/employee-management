import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/shared/base/usecase';
import { Employee } from '../models/employee.model';
import { EmployeeRepository } from '../repository/employee.repository';

@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeUsecase implements UseCase<Employee, Employee> {
  constructor(private employeeRepository: EmployeeRepository) { }

  execute(param: Employee): Observable<Employee> {
    return this.employeeRepository.UpdateEmployee(param);
  }
}
