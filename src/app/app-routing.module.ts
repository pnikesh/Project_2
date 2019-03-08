import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
<<<<<<< HEAD
import { UserdetailsComponent } from './userdetails/userdetails.component';
=======
import { BookConfirmationComponent } from './book-confirmation/book-confirmation.component';
>>>>>>> master

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
<<<<<<< HEAD
    path: 'userdetails',
    component: UserdetailsComponent
=======
    path: 'book_confirmation',
    component: BookConfirmationComponent
>>>>>>> master
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
