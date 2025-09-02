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

  private returnValue!: RoomsItem[];

  public bringingDataIntoLine(arrayData: CategoryOfProduct): CardData[] {
    return Object.values(arrayData)
      .flatMap((room: RoomsItem) => Object.values(room))
      .flatMap((category: CardData) => Object.values(category));
  }

  // public returnRoomCategory(
  //   roomCategory: CategoryOfProduct,
  //   action: number
  // ): RoomsItem[] {
  //   switch (action) {
  //     case 1: {
  //       return Object.values(roomCategory);
  //     }
  //     case 2: {
  //       return Object.values(roomCategory).flatMap((room: RoomsItem) =>
  //         Object.values(room)
  //       );
  //     }
  //   }
  //   return this.returnValue;
  // }
}
