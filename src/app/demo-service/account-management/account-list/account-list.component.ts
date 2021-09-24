import { AccountServiesService } from './../../../../services/account-servies.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  listAccount: any;
  // @Input('listAccount') listAccount: any;

  constructor(private accountService: AccountServiesService) {}

  ngOnInit(): void {
    this.listAccount = this.accountService.listAccount;
  }
}
