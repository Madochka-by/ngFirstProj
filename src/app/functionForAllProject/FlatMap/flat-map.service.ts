import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlatMapService {
  constructor() {}

  bringingDataIntoLine(arrayData: any[]): any {
    const data$ = Object.values(arrayData)
      .flatMap((room: any) => Object.values(room))
      .flatMap((category: any) => Object.values(category));
    return data$;
  }
}
