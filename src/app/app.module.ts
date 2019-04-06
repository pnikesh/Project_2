import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';

import { FormsModule }   from '@angular/forms';
import * as $ from 'jquery';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { EnterPipe } from './enter.pipe';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { BookConfirmationComponent } from './book-confirmation/book-confirmation.component';
import { HistoryComponent } from './history/history.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { HistoryPipe } from './history.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    SidebarComponent,
    FlightDetailsComponent,
    EnterPipe,
    UserdetailsComponent,
    BookConfirmationComponent,
    HistoryComponent,
    PaymentpageComponent,
    HistoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
