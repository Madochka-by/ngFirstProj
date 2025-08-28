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

@Injectable({
  providedIn: 'root',
})
export class GetDBDataService {
  constructor(private _httpClient: HttpClient) {}

  public getData(): Observable<CardData[]> {
    return this._httpClient.get<CardData[]>(
      'https://angularcommercewebsite-petproj-default-rtdb.firebaseio.com/CATALOG/.json'
    );
  }
}
