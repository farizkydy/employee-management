// src/app/core/models/employee.model.ts
export interface Employee {
    id: string; // Optional field for the employee ID
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    basicSalary: number;
    status: string;
    group: string;
    description: string;
  }
  