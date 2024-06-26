import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/employees']);
    } else {
      alert('Invalid credentials');
    }
  }

}
