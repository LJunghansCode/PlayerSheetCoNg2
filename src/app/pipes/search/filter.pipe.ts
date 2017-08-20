import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
@Injectable()
export class NoteFilterPipe implements PipeTransform {
  transform(items: any[], args: any): any[] {
    const isSearch = (data: any): boolean => {
      let isAll = false;
      if (typeof data === 'object') {
        for (let z in data) {
          if (isAll = isSearch(data[z])) {
            break;
          }
        }
      } else {
        if (typeof args === 'number') {
          isAll = data === args;
        } else {
          isAll = data.toString().match(new RegExp(args, 'i'));
        }
      }

      return isAll;
    };

    return items.filter(isSearch);
  }
}
