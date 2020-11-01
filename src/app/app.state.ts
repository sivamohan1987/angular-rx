import { Account } from './models/account.model';

export interface AppState {
  readonly account: Account[];
}