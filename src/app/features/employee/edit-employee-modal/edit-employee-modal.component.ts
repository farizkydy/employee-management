import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['./edit-employee-modal.component.scss']
})
export class EditEmployeeModalComponent {
  @Input() employee!: Employee;
  @Output() save = new EventEmitter<Employee>();
  @Output() cancel = new EventEmitter<void>();

  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      basicSalary: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnChanges() {
    if (this.employee) {
      const employeeData = {
        ...this.employee,
        birthDate: this.formatDate(new Date(this.employee.birthDate))
      };
      this.editForm.patchValue(employeeData);
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const day = ('0' + date.getDate()).slice(-2); 
    return `${year}-${month}-${day}`;
  }

  onSave() {
    if (this.editForm.valid) {
      const formValue = this.editForm.value;
      formValue.basicSalary = parseFloat(formValue.basicSalary).toString();
      this.save.emit(this.editForm.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
