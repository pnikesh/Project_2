import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enter'
})
export class EnterPipe implements PipeTransform {

<<<<<<< HEAD
  transform(flights: any[], departureCityField: string, arrivalCityField: string, i:number): any {
=======
  transform(flights$: any[], departureCityField: string, i:number): any {
>>>>>>> master

    var filterFlights = [];
    //let val = (value.departureCity).indexOf(departureCityField); //
<<<<<<< HEAD
    var filteredFlights = flights.filter(flight => {
      return (flight.departureCity.toLocaleLowerCase()).startsWith(departureCityField.toLocaleLowerCase()) //&&  flight.arrivalCity.toLocaleLowerCase()).startsWith(departureCityField.toLocaleLowerCase());
       
=======
    filterFlights = flights$.filter(flight => {
      return (flight.departureCity.toLocaleLowerCase()).startsWith(departureCityField.toLocaleLowerCase());
>>>>>>> master
    })
   // debugger;
    console.log(filterFlights);
    //console.log(i);
    //if (value.includes(departureCityField))



    return filterFlights;
  }

}
