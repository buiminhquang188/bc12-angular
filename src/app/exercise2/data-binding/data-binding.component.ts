import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  title = 'Data Binding';
  fullName = 'Bùi Minh Quang';
  age = 21;
  isMarried = false;

  user = {
    username: 'Quangb',
    email: 'buiminhquang188@gmail.com',
    role: true,
  };

  imgSrc = 'https://picsum.photos/536/354';

  isDisabled = true;

  email = '';

  clickMe() {
    alert('Clicked');
  }

  getEmail(event: any) {
    this.email = event.target.value;
    console.log(this.email);
  }

  constructor() {}

  ngOnInit(): void {}
}
