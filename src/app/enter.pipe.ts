import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enter'
})
export class EnterPipe implements PipeTransform {

  transform(value: any[], departureCityField: string, i:number): any[] {

    console.log(value);
    console.log(i);
    //if (value.includes(departureCityField))



    return null;
  }

}
