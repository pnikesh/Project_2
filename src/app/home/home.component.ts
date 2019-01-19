import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';
import { isArray } from 'util';
import { ArrayType, collectExternalReferences } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  departureCityField: string;
  arrivalCityField: string;
  departureDateField: string;
  arrivalDateField: string;
  isDirect: boolean;
  priceField: number;

  //filteredFlights$: any;
  flights$: any;

  temp: boolean= true;

  flight: any;

  //flight (departureCity, arrivalCity, departureTime, arrivalTime, direct, ticketPrice) => 
 // {departureCity, arrivalCity, departureTime, arrivalTime, direct, ticketPrice};

  constructor(private data: DataService ) { }

  ngOnInit() {
    this.data.getAllFlights().subscribe(
      data => {
        this.flights$ = data;
        console.log(this.flights$); 
      }
       // this.flights$.filter
      
      
    )
       console.log(this.flights$); 
   // this.filteredFlights$ = this.flights$;
  }

 // filter = function(departureCityField, flights$){
 //   return flights$.includes(departureCityField);
 // }

 newInput(){
   console.log(this.departureCityField)
 }

 search = () => {}

  filteredFlights$ = () => {
    return this.flights$.filter(flight => {
      let a = flight.departureCity.indexOf(this.departureCityField) > -1;
      console.log(a)
      return a;
    })
    
  }  

}
