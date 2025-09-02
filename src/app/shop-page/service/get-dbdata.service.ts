import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  public allCategoryData: any[] = [];
  public LIVING: any[] = [];
  public DINING: any[] = [];
  public BEDROOM: any[] = [];
  public KEYS: any[] = [];

  private data$: Observable<CategoryOfProduct>;

  constructor(private _httpClient: HttpClient) {
    this.data$ = this._httpClient
      .get<CategoryOfProduct>(
        'https://angularcommercewebsite-petproj-default-rtdb.firebaseio.com/CATALOG/.json'
      )
      .pipe(shareReplay(1));
  }

  getData(): Observable<CategoryOfProduct> {
    return this.data$;
  }
}

// public ngOnInit(): void {
//   this.getDBDataService.getDataFromDB().subscribe((res) => {
//     this.allData = Object.values(res)
//       .flatMap((room: any) => Object.values(room))
//       .flatMap((category: any) => Object.values(category));

//     this.getDBDataService.setData(this.allData);
//   });
// }
