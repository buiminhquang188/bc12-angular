import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss'],
})
export class StructuralComponent implements OnInit {
  title = 'Structural Directives';
  isLoggedIn = false;
  username = 'quangb';
  age = 0;
  rappers = ['Đen Vâu', 'Binz', 'Karik', 'Wowy'];
  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
