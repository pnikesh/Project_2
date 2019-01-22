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
        let vals = Object.entries(this.flights$);
        console.log(this.departureCityField, vals)

      }
  
    )
       console.log(this.flights$); 
      

   // this.filteredFlights$ = this.flights$;
  }

 /* filter = function(departureCityField, flights$){
    let a = flights$.includes(departureCityField);
    console.log(a);
    return a;
  }*/

 newInput(obj, departureCityField){

  
  let vals = Object.entries(this.flights$);
  console.log(this.departureCityField, vals)
  let a = this.flights$.includes(departureCityField);

  //console.log(a);
  let i : number;     
  for (i =0; i < vals.length; i++ ){
    
    let str = (vals[i][1].departureCity).toLowerCase();
    console.log(str);
   // str.toLowerCase().includes(departureCityField.toLowerCase())
   //.toLowerCase();
   var substr = this.departureCityField;
   console.log(substr);
    console.log(str.includes(substr));

    
  }


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
