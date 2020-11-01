import { Action } from '@ngrx/store';
import { Account } from '../models/account.model';

export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const ADD_AMOUNT = "ADD_AMOUNT";
export const DEDUCT_AMOUNT = "DEDUCT_AMOUNT";

interface TransactionPayload {
  accountNumber: number;
  transactionAmount: number;
}

export class AddAccount implements Action {
  readonly type = ADD_ACCOUNT;
  constructor(public payload: Account) {}
}

export class DeleteAccount implements Action {
  readonly type = DELETE_ACCOUNT;
  constructor(public payload: number) {}
}

export class CreditAmount implements Action {
  readonly type = ADD_AMOUNT;
  constructor(public payload: TransactionPayload) {}
}

export class DebitAmount implements Action {
  readonly type = DEDUCT_AMOUNT;
  constructor(public payload: TransactionPayload) {}
}

export type Actions = AddAccount | DeleteAccount | CreditAmount | DebitAmount;