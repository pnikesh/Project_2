import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule }   from '@angular/forms';
import * as $ from 'jquery';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { EnterPipe } from './enter.pipe';
<<<<<<< HEAD
import { UserdetailsComponent } from './userdetails/userdetails.component';
=======
import { BookConfirmationComponent } from './book-confirmation/book-confirmation.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    SidebarComponent,
    FlightDetailsComponent,
    EnterPipe,
<<<<<<< HEAD
    UserdetailsComponent
=======
    BookConfirmationComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
