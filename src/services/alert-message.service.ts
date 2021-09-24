import { Injectable } from '@angular/core';

// Phải có mới inject một servies trong một component nào đó để sử dụng
@Injectable({
  providedIn: 'root',
})
export class AlertMessageService {
  constructor() {}

  alertMessage(message: string) {
    alert(message);
}
}
