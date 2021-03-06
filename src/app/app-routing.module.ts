import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { BookConfirmationComponent } from './book-confirmation/book-confirmation.component';
import { HistoryComponent } from 'src/app/history/history.component';
import { componentFactoryName } from '@angular/compiler';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: FlightDetailsComponent
  },
  {
    path: 'userdetails',
    component: UserdetailsComponent
    
  },
  {
    path: 'book_confirmation',
    component: BookConfirmationComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path:'payment',
    component:PaymentpageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
