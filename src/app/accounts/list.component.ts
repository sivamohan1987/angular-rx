import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Account } from './../models/account.model';
import { AppState } from './../app.state';
import * as AccountActions from './../actions/account.actions';

@Component({
  selector: 'account-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  accounts: Array<Account>;
  
  @Input()
  selectedAccountNumber: number;

  @Output() selectedAccount = new EventEmitter();
  constructor(private store: Store<AppState>) {
    store.pipe(select('account'))
         .subscribe(state => this.accounts = state);
         console.log(this.accounts);
  }

  ngOnInit(): void {
  }

  onSelectAccount(account: Account) {
    console.log(account);
    this.selectedAccount.emit(account.accountNumber);
  }

  deleteAccount(accountNumber: number) {
    this.store.dispatch(new AccountActions.DeleteAccount(accountNumber));
    console.log(accountNumber);
  }
}
