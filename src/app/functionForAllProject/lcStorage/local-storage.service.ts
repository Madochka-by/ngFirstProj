import { Injectable } from '@angular/core';
import { CardData } from 'src/app/shop-page/service/get-dbdata.service';
import { FlatMapService } from '../FlatMap/flat-map.service';

export interface storage {
  amount: number;
  img: string;
  name: string;
  price: number;
  SKU: string;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private curDat!: CardData;
  private storageData: storage[] = [];
  private storageKeys: string[] = [];

  constructor(private _getData: FlatMapService) {}

  public set(): void {
    this.curDat = this._getData.getCurrentProductForCart();
  }

  public setItem(data: CardData): void {
    const storageData: storage = {
      amount: 1,
      img: data.img[0],
      name: data.name,
      price: data.price,
      SKU: data.SKU,
    };

    localStorage.setItem(data.SKU, JSON.stringify(storageData));
  }

  public getItem(): storage[] {
    for (let i = 0; i < localStorage.length; i++) {
      const key: string = localStorage.key(i)!;
      this.storageKeys.push(key);
    }

    this.storageKeys.forEach((el: string) => {
      const temp: string | null = localStorage.getItem(el);
      if (temp) this.storageData.push(JSON.parse(temp));
    });

    return this.storageData;
  }
}
