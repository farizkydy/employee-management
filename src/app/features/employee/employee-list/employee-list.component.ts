import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { Employee } from 'src/app/core/models/employee.model';
import { SnackBar, SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  paginatedEmployees: Employee[] = [];
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  selectedEmployee!: Employee;
  showEditModal = false;
  snackbarComponent!: SnackbarComponent;
  configSnackBar!: SnackBar;
  isShowSnackBar: boolean = false;
  
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.loadEmployees();
    this.snackbarComponent = new SnackbarComponent(); 
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.updatePagination();
    });
  }

  onSearch() {
    this.employeeService.searchEmployees(this.searchQuery).subscribe(data => {
      this.employees = data;
      this.updatePagination();
    });
  }

  sort(key: keyof Employee) {
    this.employees.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] > b[key]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.updatePagination();
  }

  updatePagination() {
    this.paginatedEmployees = this.getPaginatedEmployees();
  }

  getPaginatedEmployees(): Employee[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.employees.slice(start, end);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  navigateToAddEmployee() {
    this.router.navigate(['/add-employee']);
  }

  editEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
    this.showEditModal = true;
  } 

  onEditSave(updatedEmployee: Employee): void {
    console.log("updatedEmployee", updatedEmployee)
    this.employeeService.updateEmployee(this.selectedEmployee.id, updatedEmployee).subscribe(
      () => {
        this.showEditSuccessSnackbar();
        this.loadEmployees(); // Reload employees after successful update
        this.showEditModal = false;
      },
      (error) => {
        console.error('Error updating employee:', error);
        // Handle error if necessary
      }
    );
  }

  onEditCancel(): void {
    this.showEditModal = false;
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee.id!).subscribe(() => {
      this.employees = this.employees.filter(emp => emp.id !== employee.id);
      this.updatePagination();
      this.showDeleteSuccessSnackbar();
    });
  }
  totalPages(): number {
    return Math.ceil(this.employees.length / this.itemsPerPage);
  }

  detailProfile(id: string) {
    this.router.navigate([`/employee/${id}`]);
  }

  onChangeItemsPerPage(): void {
    this.currentPage = 1;
    this.updatePagination();
  }

  showEditSuccessSnackbar(): void {
    this.isShowSnackBar = true;
    this.configSnackBar = {
      message: 'Employee updated successfully',
      type: 'snackbar-warning'
    }
    setTimeout(() => {
      this.isShowSnackBar = false;
    }, 2000);
  }

  showDeleteSuccessSnackbar(): void {
    this.isShowSnackBar = true;
    this.configSnackBar = {
      message: 'Employee deleted successfully',
      type: 'snackbar-success'
    }
    setTimeout(() => {
      this.isShowSnackBar = false;
    }, 2000);
  }
}
