import { Injectable } from '@angular/core';
import {
  CardData,
  CategoryOfProduct,
  RoomsItem,
} from 'src/app/shop-page/service/get-dbdata.service';

@Injectable({
  providedIn: 'root',
})
export class FlatMapService {
  private curDat!: CardData;

  constructor() {}

  public bringingDataIntoLine(arrayData: CategoryOfProduct): CardData[] {
    return Object.values(arrayData)
      .flatMap((room: RoomsItem) => Object.values(room))
      .flatMap((category: CardData) => Object.values(category));
  }

  public currentProductForCart(obj: CardData[], name: string): void {
    obj
      .flatMap((index: CardData) => index)
      .flatMap((value: CardData) => {
        if (value.name === name) {
          this.curDat = value;
        }
      });
  }

  public getCurrentProductForCart(): CardData {
    return this.curDat;
  }
}
