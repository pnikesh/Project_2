import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';
import { isArray } from 'util';
import { ArrayType, collectExternalReferences } from '@angular/compiler/src/output/output_ast';
import { Flight } from '../flight';
import { Router }  from '@angular/router';

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
  isRound: boolean = false;
  priceField: number;

  public filteredFlights: Flight[] = [];
  private tempFlights: Flight[] = [];
  flights$: any;

  searchFieldsContainInfo: boolean= false;

  flight: any;

  constructor(private data: DataService, private router: Router ) { }

  // Extracting list of flights when component loads
  ngOnInit() {
    this.data.getAllFlights().subscribe(
      data => {
        this.flights$ = data;
        console.log(this.flights$); 
        let vals = Object.entries(this.flights$);
        console.log(this.departureCityField, vals)
      })  
  } 

// Destination City field Change Event
  destCityInput(obj){

   
  } 
 
 // Arrival City field event
  arrCityInput(obj){

  // this.filteredFlights = []; 

  let vals = this.flights$;
  
  let i : number;     
  for (i =0; i < vals.length; i++ ){    
    if ((vals[i].arrivalCity).toLowerCase().includes(obj)) {
      this.filteredFlights.push(vals[i]);
    }  
  }
  this.filteredFlights.length == 0 ? this.searchFieldsContainInfo = false : this.searchFieldsContainInfo = true
  } 

 
// Event handlers of search fields updated

  changed(obj) {

    

    console.log(obj)

    this.tempFlights = [];
    this.filteredFlights = [];; 
  
    let vals = this.flights$;
    
    let i : number;    
    
    // Testing filter
    //const result = vals.filter(word => word.startsWith(obj.toLowerCase()));

    //
    for (i =0; i < vals.length; i++ ){    

      if ((vals[i].departureCity).toLowerCase().startsWith(obj.toLowerCase())) {
        this.tempFlights.push(vals[i]);
      }  
    } 


    if (this.tempFlights.length != 0) this.filteredFlights = this.tempFlights;
    this.filteredFlights.length == 0 ? this.searchFieldsContainInfo = false : this.searchFieldsContainInfo = true
  /*
    this.filteredFlights = []; 
  *///debugger;



      // Clearing main page if all input fields empty
      if  (this.departureCityField == "" || this.departureCityField === undefined)    
      {
        if (this.arrivalCityField == "" || this.arrivalCityField === undefined) 
        {
          this.searchFieldsContainInfo = false;
        }
      }
  
    
  }

  onHistory() {

    this.router.navigate(['history']);
  }

}


  //flight (departureCity, arrivalCity, departureTime, arrivalTime, direct, ticketPrice) => 
 // {departureCity, arrivalCity, departureTime, arrivalTime, direct, ticketPrice};

 //let str = (vals[i].departureCity).toLowerCase();   
      //console.log(this.flights$); 
   // this.filteredFlights$ = this.flights$;

/* filter = function(departureCityField, flights$){
    let a = flights$.includes(departureCityField);
    console.log(a);
    return a;
  }*/

 //let vals = Object.entries(this.flights$);
//console.log(this.departureCityField, vals)
  //let a = this.flights$.includes(obj);

  //console.log(str);

    //console.log(typeof this.filteredFlights);
    //console.log(typeof this.flights$);
  //console.log(a);

    //this.filteredFlights$ = vals[i] //.filter(value => {
      //let x = (value[i][1].departureCity).indexOf(obj) > -1;
      //  return x;
     // })

   // str.toLowerCase().includes(departureCityField.toLowerCase())
   //.toLowerCase();
   //var substr = this.departureCityField;
   //console.log(substr);
   // console.log(str.includes(substr));

/*
 search = () => {}

  filteredFlights$ = () => {
    return this.flights$.filter(flight => {
      let a = flight.departureCity.indexOf(this.departureCityField) > -1;
      console.log(a)
      return a;
    })
    
  }  
*/
