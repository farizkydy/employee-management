import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

export abstract class EmployeeRepository {
  abstract GetEmployess(): Observable<Employee[]>;
  abstract GetEmployee(id: string): Observable<Employee>;
  abstract AddEmployee(payload: Employee): Observable<Employee>;
  abstract UpdateEmployee(payload: Employee): Observable<Employee>;
  abstract DeleteEmployee(id: string): Observable<any>;
  abstract SearchEmployee(id: string): Observable<Employee[]>;
}
