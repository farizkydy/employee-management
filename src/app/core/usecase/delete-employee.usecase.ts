import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/shared/base/usecase';
import { Employee } from '../models/employee.model';
import { EmployeeRepository } from '../repository/employee.repository';

@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeUsecase implements UseCase<string, any> {
  constructor(private employeeRepository: EmployeeRepository) { }

  execute(param: string): Observable<any> {
    return this.employeeRepository.DeleteEmployee(param);
  }
}
