import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, COMPONENTS } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './components/forms/account/account.component';
import { ChequeComponent } from './components/forms/cheque/cheque.component';
import { LendingComponent } from './components/forms/lending/lending.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, COMPONENTS, AccountComponent, ChequeComponent, LendingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
