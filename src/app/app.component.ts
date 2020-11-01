import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRx Learning';

  selectedAccount: number;

  onSelectAccount(event) {
    this.selectedAccount = event;
  }
}
