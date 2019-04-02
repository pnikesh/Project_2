import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'history'
})
export class HistoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
