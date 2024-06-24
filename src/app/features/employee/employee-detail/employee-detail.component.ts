import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employee!: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id!).subscribe(data => {
      this.employee = data;
    });
  }

  navigateToEmployeeList() {
    window.history.back();
  }
}
