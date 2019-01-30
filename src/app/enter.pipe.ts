import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enter'
})
export class EnterPipe implements PipeTransform {

  transform(flights$: any[], departureCityField: string, i:number): any {

    var filterFlights = [];
    //let val = (value.departureCity).indexOf(departureCityField); //
    filterFlights = flights$.filter(flight => {
      return (flight.departureCity.toLocaleLowerCase()).startsWith(departureCityField.toLocaleLowerCase());
    })
   // debugger;
    console.log(filterFlights);
    //console.log(i);
    //if (value.includes(departureCityField))



    return filterFlights;
  }

}
