import { Injectable } from '@angular/core';
import { CardData } from 'src/app/shop-page/service/get-dbdata.service';
import { FlatMapService } from '../FlatMap/flat-map.service';

export interface storage {
  amount: number;
  img: string;
  name: string;
  totalPrice: number;
  currentPrice: number;
  SKU: string;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageData: storage[] = [];

  public setItem(data: CardData): void {
    const lcData: storage[] = JSON.parse(
      localStorage.getItem('itemForCart') || '[]'
    );

    const storageData: storage = {
      amount: 1,
      img: data.img[0],
      name: data.name,
      totalPrice: data.price,
      currentPrice: data.price,
      SKU: data.SKU,
    };

    const temp: storage | undefined = lcData.find(
      (el: storage) => el.name == storageData.name
    );

    temp ? temp.amount++ : lcData.push(storageData);
    temp ? (temp.currentPrice = temp.totalPrice * temp.amount) : '';

    localStorage.setItem('itemForCart', JSON.stringify(lcData));
  }

  public getItem(): storage[] {
    this.storageData = JSON.parse(localStorage.getItem('itemForCart') || '[]');
    return this.storageData;
  }

  public deleteItem(indexItem: number): void {
    const lcData: storage[] = JSON.parse(
      localStorage.getItem('itemForCart') || '[]'
    );
    lcData.splice(indexItem, 1);

    localStorage.setItem('itemForCart', JSON.stringify(lcData));
  }
}
