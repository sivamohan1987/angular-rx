import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Account } from './../models/account.model';
import { AppState } from './../app.state';
import * as AccountActions from './../actions/account.actions';

@Component({
  selector: 'account-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @Input()
  accountNumber: number;

  amount: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  
  credit() {
    this.store.dispatch(new AccountActions.CreditAmount({accountNumber: this.accountNumber, transactionAmount: this.amount}));
  }

  debit() {
    this.store.dispatch(new AccountActions.DebitAmount({accountNumber: this.accountNumber, transactionAmount: this.amount}));
  }
}
