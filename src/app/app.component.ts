import { Component } from '@angular/core';

@Component({
  // Phải có 3 cái này để liên kết với nhau
  // Đặt là gì lúc gọi sẽ gọi đúng như v
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
}
