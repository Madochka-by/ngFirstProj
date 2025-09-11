import { Injectable } from '@angular/core';
import {
  CardData,
  CategoryOfProduct,
  RoomsItem,
} from 'src/app/shop-page/service/get-dbdata.service';
import {
  LocalStorageService,
  storage,
} from '../lcStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FlatMapService {
  constructor(private _storage: LocalStorageService) {}

  private curDat!: CardData;

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

  public setPoint(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  public calculateTotalPriceForCart(): string {
    const startSum: number = 0;
    const sumPrice: number = this._storage
      .getItem()
      .map((item: storage) => item.currentPrice)
      .reduce((acc: number, curr: number) => acc + curr, startSum);

    return this.setPoint(sumPrice);
  }
}
