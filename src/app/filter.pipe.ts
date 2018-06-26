import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(details: any, search: any): any {
    if(search==undefined){
      return details;
    }
    else{
      return details.filter(function(details){
        if(details.name.toLowerCase().includes(search.toLowerCase())){
          return details
        }
      })
    }
  }

}
