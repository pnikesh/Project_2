import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enter'
})
export class EnterPipe implements PipeTransform {

  transform(flights: any[], search: any, i:number): any {

    var filterFlights = [];
  
    var entries = Object.values(search); 

    var dCity;
      entries[0] == undefined ? dCity = entries[0] = "" : dCity = entries[0].toLowerCase();

      var aCity;
      entries[1] == undefined ? aCity = entries[1] = "" : aCity = entries[1].toLowerCase();

      var dDate;
      entries[2] == undefined ? dDate = entries[2] = "" : dDate = entries[2].toLowerCase();

      var aDate;
      entries[3] == undefined ? aDate = entries[3] = "" : aDate = entries[3].toLowerCase();

    var filteredFlights = flights.filter(flight => {     
    
      let temp = flight.departureCity.toLocaleLowerCase().startsWith(dCity) 
        && flight.arrivalCity.toLocaleLowerCase().startsWith(aCity)
        && (flight.departureTime.toLocaleLowerCase().search(dDate) != -1)
        && (flight.arrivalTime.toLocaleLowerCase().search(aDate) != -1);
      return  temp;
       
    })
   // debugger;
    console.log(filteredFlights);
   

    return filteredFlights;
  }

}
