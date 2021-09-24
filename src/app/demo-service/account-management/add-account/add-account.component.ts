import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountServiesService } from 'src/services/account-servies.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss'],
})
export class AddAccountComponent implements OnInit {
  // @Output('addAccount') onAddAccountEmitter = new EventEmitter<any>();
  constructor(private accountService: AccountServiesService) {}

  ngOnInit(): void {}

  addAccount(account: any) {
    // this.onAddAccountEmitter.emit(account);
    this.accountService.addAccount(account);
  }
}
