import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { Employee } from 'src/app/core/models/employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employee!: Employee;
  groups: string[] = ['Group1', 'Group2', 'Group3', 'Group4', 'Group5', 'Group6', 'Group7', 'Group8', 'Group9', 'Group10'];
  today: string =new Date().toISOString().split('T')[0];
  employeeForm!: FormGroup;
  

  constructor(private employeeService: EmployeeService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required, this.maxDateValidator.bind(this)]],
      basicSalary: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  
  maxDateValidator(control: any) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate <= today ? null : { invalidDate: true };
  }

  onSave() {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    } else {
      alert('Please fill out all fields');
    }
  }


  navigateToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
