import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  constructor(private _httpClient: HttpClient) {}

  public getData(): Observable<CategoryOfProduct> {
    return this._httpClient.get<CategoryOfProduct>(
      'https://angularcommercewebsite-petproj-default-rtdb.firebaseio.com/CATALOG/.json'
    );
  }
}
