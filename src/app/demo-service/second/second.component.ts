import { AlertMessageService } from 'src/services/alert-message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  constructor(private alertMessageService: AlertMessageService) {}

  ngOnInit(): void {}

  sayHello() {
    this.alertMessageService.alertMessage('Hello');
    // alert('Hello');
  }
}
