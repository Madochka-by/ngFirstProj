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
  constructor() {}

  public bringingDataIntoLine(arrayData: CategoryOfProduct): CardData[] {
    return Object.values(arrayData)
      .flatMap((room: RoomsItem) => Object.values(room))
      .flatMap((category: CardData) => Object.values(category));
  }

  // public searchAndViewInfoAboutProduct(): CardData[]{
  //   return
  // }
}
