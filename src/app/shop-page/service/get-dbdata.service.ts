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

@Injectable({
  providedIn: 'root',
})
export class GetDBDataService {
  private data$!: Observable<CategoryOfProduct>;

  constructor(private _httpClient: HttpClient) {}

  public getData(): Observable<CategoryOfProduct> {
    this.data$ = this._httpClient
      .get<CategoryOfProduct>(
        'https://angularcommercewebsite-petproj-default-rtdb.firebaseio.com/CATALOG/.json'
      )
      .pipe(shareReplay(1));
    return this.data$;
  }
}
