import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';
import { isArray } from 'util';
import { ArrayType, collectExternalReferences } from '@angular/compiler/src/output/output_ast';
import { Flight } from '../flight';



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


////
  public filteredFlights: Flight[] = [];
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

 newInput(obj){

   this.filteredFlights = [];
  
  //let vals = Object.entries(this.flights$);
  let vals = this.flights$;
  //console.log(this.departureCityField, vals)
  //let a = this.flights$.includes(obj);

  //console.log(a);
  let i : number;     
  for (i =0; i < vals.length; i++ ){
    
    let str = (vals[i].departureCity).toLowerCase();
    //console.log(str);

    console.log(typeof this.filteredFlights);
    console.log(typeof this.flights$);

    if ((vals[i].departureCity).toLowerCase().includes(obj)) {
      this.filteredFlights.push(vals[i]);
    }
    

    //this.filteredFlights$ = vals[i] //.filter(value => {
      //let x = (value[i][1].departureCity).indexOf(obj) > -1;
      //  return x;
     // })


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
