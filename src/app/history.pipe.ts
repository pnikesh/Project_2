import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'history'
})
export class HistoryPipe implements PipeTransform {

  transform(value: any, date: any): any {

    var filteredFlights = value.filter(flight => {    
     return flight.departureTimeTo.search(date.departureTimeTo) != -1;    
    })

    return filteredFlights;
  }

}
