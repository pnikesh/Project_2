import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enter'
})
export class EnterPipe implements PipeTransform {

  transform(flights: any[], search: any, i:number): any {

    var filterFlights = [];
  
    var entries = Object.values(search); 

    var filteredFlights = flights.filter(flight => {

      let var2;
      entries[0] == undefined ? var2 = entries[0] = "" : var2 = entries[0].toLowerCase();

      let var3;
      entries[1] == undefined ? var3 = entries[1] = "" : var3 = entries[1].toLowerCase();
    
      let temp = flight.departureCity.toLocaleLowerCase().startsWith(var2) && flight.arrivalCity.toLocaleLowerCase().startsWith(var3);
      return  temp;
       
    })
   // debugger;
    console.log(filteredFlights);
   

    return filteredFlights;
  }

}
