import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  // Lấy biến từ bên component cha và đặt lại tên biến
  @Input('fullName') myFullName: string;
  @Input('age') myAge: number;
  @Input('account') myAccount: {
    username: string;
    email: string;
    role: boolean;
  };
  @Input('user') myUser: {
    id: number;
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDt: string;
    matKhau: string;
    maLoaiNguoiDung: string;
  }[];
  // Tạo ra emitter để emit lên component cha
  @Output('deleteAccount') deleteAccountEmitter = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.myUser);
  }
  deleteAccount(id: number) {
    this.deleteAccountEmitter.emit(id);
  }
}
