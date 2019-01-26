import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enter'
})
export class EnterPipe implements PipeTransform {

  transform(flights: any[], departureCityField: string, arrivalCityField: string, i:number): any {

    //filteredFlights: [];
    //let val = (value.departureCity).indexOf(departureCityField); //
    var filteredFlights = flights.filter(flight => {
      return (flight.departureCity.toLocaleLowerCase()).startsWith(departureCityField.toLocaleLowerCase()) //&&  flight.arrivalCity.toLocaleLowerCase()).startsWith(departureCityField.toLocaleLowerCase());
       
    })
   // debugger;
    console.log(filteredFlights);
    //console.log(i);
    //if (value.includes(departureCityField))



    return filteredFlights;
  }

}
