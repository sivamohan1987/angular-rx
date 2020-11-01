import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { accountReducer } from './reducer/account.reducer';
import { ListComponent } from './accounts/list.component';
import { TransactionComponent } from './accounts/transaction.component';
import { AccountComponent } from './accounts/account.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TransactionComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({account: accountReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
