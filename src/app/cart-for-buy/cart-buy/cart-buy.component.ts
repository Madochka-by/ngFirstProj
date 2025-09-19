import { Component, OnInit } from '@angular/core';
import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';
import {
  LocalStorageService,
  storage,
} from 'src/app/functionForAllProject/lcStorage/local-storage.service';

@Component({
  selector: 'app-cart-buy',
  templateUrl: './cart-buy.component.html',
  styleUrls: ['./cart-buy.component.scss'],
})
export class CartBuyComponent implements OnInit {
  public storageData!: storage[];
  public picture: string[] = [];
  public totalSum!: string;

  constructor(
    private _storage: LocalStorageService,
    public _func: FlatMapService
  ) {}

  public deleteProduct(index: number): void {
    this._storage.deleteItem(index);
    this.storageData.splice(index, 1);
  }

  ngOnInit(): void {
    this.storageData = this._storage.getItem();

    this.storageData.map((el) => {
      this.picture.push(el.img.replace(/\s+/g, '-'));
    });
  }
}
