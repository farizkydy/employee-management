# Employee Management Angular App

This is a simple employee management application built with Angular. It utilizes an API hosted on Mock API with a Clean Architecture approach.

The application allows users to manage employees, including listing, adding, editing, and deleting employee records.
## Requirements

- Node.js (v14.x or higher recommended)
- Angular CLI
- Internet connection (for API access)
## Getting Started

### Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/farizkydy/employee-management
cd employee-management
npm install
ng serve


```markdown
## Usage

- **Login Page**: 
  - Use 'admin' username and password to login (dummy authentication).
  
- **Employee List Page**:
  - Displays a list of employees fetched from the API.
  - Supports paging, sorting, and searching.
  - Click "Add Employee" to navigate to the Add Employee page.
  - Click "Edit" or "Delete" on an employee row to perform actions (notifies with different colored notifications).

- **Add Employee Page**:
  - Form to add a new employee.
  - All fields are mandatory; errors will display if any fields are empty.
  - Birth Date uses a date picker and cannot exceed today's date.
  - Basic Salary must be a number.
  - Group field is a dropdown with a search feature.

- **Edit Employee**:
  - Modal or form to edit an existing employee's details.
  - Validates fields similar to Add Employee.

- **Employee Detail Page**:
  - Displays detailed information about a selected employee.


