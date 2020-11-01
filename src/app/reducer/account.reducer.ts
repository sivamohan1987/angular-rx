import { Action } from '@ngrx/store';
import { Account } from '../models/account.model';
import { ADD_ACCOUNT, DELETE_ACCOUNT, ADD_AMOUNT, DEDUCT_AMOUNT, Actions } from '../actions/account.actions';

// const initialState: Account = {
//     accountNumber: 1000,
//     holderName: "Default",
//     accountType: "Savings",
//     accountBalance: 0
// }

export function accountReducer(accounts: Account[] = [], action: Actions) {
  switch(action.type) {
    case ADD_ACCOUNT:
      return [...accounts, action.payload];
    case DELETE_ACCOUNT:
      accounts.splice(action.payload, 1);
      return accounts;
    case ADD_AMOUNT:
      var { accountNumber, transactionAmount } = action.payload;
      var index = accounts.map(account => account.accountNumber).indexOf(accountNumber);
      var selectedAccount = accounts[index];
      return [
          ...accounts.slice(0, index),
          Object.assign({}, selectedAccount, {accountBalance: selectedAccount.accountBalance + transactionAmount}),
          ...accounts.slice(index + 1)
      ];
    case DEDUCT_AMOUNT:
      var { accountNumber, transactionAmount } = action.payload;
      var index = accounts.map(account => account.accountNumber).indexOf(accountNumber);
      var selectedAccount = accounts[index];
      return [
          ...accounts.slice(0, index),
          Object.assign({}, selectedAccount, {accountBalance: selectedAccount.accountBalance - transactionAmount}),
          ...accounts.slice(index + 1)
      ];
    default:
      return accounts;
  }
}