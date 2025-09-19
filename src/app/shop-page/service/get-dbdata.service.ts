import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

export interface CardData {
  SKU: string;
  additionalInformation: string;
  color: string[];
  content: string;
  description1: string;
  description2: string;
  id: number;
  img: string[];
  name: string;
  price: number;
  rating: number;
  sale: string;
  previewImg: string;
  previewDescription: string;
  size: string[];
}
export interface RoomsItem {
  chairs: CardData[];
  tables: CardData[];
  sofas: CardData[];
}

export interface CategoryOfProduct {
  bedroom: RoomsItem;
  dining: RoomsItem;
  living: RoomsItem;
}

export interface filters {
  color: string[];
  price: filterPrice;
  rating: number[];
  shopByRoom: filtersShopBy;
  size: string[];
}

export interface filtersShopBy {
  bedroom: string[];
  dining: string[];
  living: string[];
}

export interface filterPrice {
  '0-500000': filterPriceTotal;
  '500000-5000000': filterPriceTotal;
  '5000000-50000000': filterPriceTotal;
  '50000000-550000000': filterPriceTotal;
}

export interface filterPriceTotal {
  max: number;
  min: number;
}

@Injectable({
  providedIn: 'root',
})
export class GetDBDataService {
  private getData$!: Observable<CategoryOfProduct>;
  private getFilters$!: Observable<filters>;

  constructor(private _httpClient: HttpClient) {}

  public getData(): Observable<CategoryOfProduct> {
    this.getData$ = this._httpClient
      .get<CategoryOfProduct>(
        'https://angularcommercewebsite-petproj-default-rtdb.firebaseio.com/CATALOG/.json'
      )
      .pipe(shareReplay(1));
    return this.getData$;
  }

  public getFilters(): Observable<filters> {
    this.getFilters$ = this._httpClient
      .get<filters>(
        'https://angularcommercewebsite-petproj-default-rtdb.firebaseio.com/FILTER/.json'
      )
      .pipe(shareReplay(1));
    return this.getFilters$;
  }
}
