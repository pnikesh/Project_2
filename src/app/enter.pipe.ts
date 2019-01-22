import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enter'
})
export class EnterPipe implements PipeTransform {

  transform(value: any[], departureCityField: string, i:number): any[] {

    //filteredFlights: [];
    //let val = (value.departureCity).indexOf(departureCityField);
    //var filteredFlights = value[0].filter(value => {
    //  return (value[i].departureCity).indexOf(departureCityField) > -1;
    //})
   // debugger;
    console.log(value);
    //console.log(i);
    //if (value.includes(departureCityField))



    return value;
  }

}
