import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enter'
})
export class EnterPipe implements PipeTransform {

  transform(flights: any[], search: any, i:number): any {

    var filterFlights = [];
    //let val = (value.departureCity).indexOf(departureCityField); //

    let entries = Object.values(search); 



    

    var filteredFlights = flights.filter(flight => {

      let var1 = flight.departureCity.toLowerCase();
      let var2 = entries[0].toLowerCase();

      let var3;
      entries[1] == undefined ? var3 = entries[1] = "" : var3 = entries[1].toLowerCase();
      //let temp = var1.startsWith(var2);
      let temp = flight.departureCity.toLocaleLowerCase().startsWith(entries[0].toLocaleLowerCase()) && flight.arrivalCity.toLocaleLowerCase().startsWith(entries[1].toLocaleLowerCase());
      return  temp//&&  flight.arrivalCity.toLocaleLowerCase()).startsWith(departureCityField.toLocaleLowerCase());
       
    })
   // debugger;
    console.log(filteredFlights);
    //console.log(i);
    //if (value.includes(departureCityField))



    return filteredFlights;
  }

}
