import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AccountForm } from './../models/accountForm';
import { AppState } from './../app.state';
import * as AccountActions from './../actions/account.actions';

@Component({
  selector: 'account-component',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account = new AccountForm('', 0, '', 0);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { }

  onSubmit() {
    this.store.dispatch(
      new AccountActions.AddAccount(
        {
          accountNumber: this.account.accountNumber, 
          holderName: this.account.holderName,
          accountType: this.account.accountType, 
          accountBalance: this.account.accountBalance
        }
      )
    )
    console.log(this.account);
    this.clearForm();
  }

  clearForm() {
    this.account = new AccountForm('', 0, '', 0);
  }
}
