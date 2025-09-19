import { Injectable, OnInit } from '@angular/core';
import { CardData } from 'src/app/shop-page/service/get-dbdata.service';

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
  private enterCount!: number;

  public getQuantity(quantity: number): void {
    this.enterCount = quantity;
  }

  public setItem(data: CardData): void {
    const lcData: storage[] = JSON.parse(
      localStorage.getItem('itemForCart') || '[]'
    );

    const storageData: storage = {
      // amount: 1,
      amount: this.enterCount === 1 ? 1 : this.enterCount,
      img: data.img[0],
      name: data.name,
      totalPrice: data.price,
      currentPrice: data.price,
      SKU: data.SKU,
    };

    const temp: storage | undefined = lcData.find(
      (el: storage) => el.name == storageData.name
    );

    temp
      ? (temp.amount = temp.amount + this.enterCount)
      : lcData.push(storageData);
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
