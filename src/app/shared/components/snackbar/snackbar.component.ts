import { Component, Input, OnInit } from '@angular/core';

export interface SnackBar {
  message: string;
  type: string;
}

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})

export class SnackbarComponent implements OnInit {
  
  @Input() configSnackBar!: SnackBar;

  constructor() {}

  ngOnInit(): void {}
}
