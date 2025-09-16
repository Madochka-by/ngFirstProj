import { Injectable, OnInit } from '@angular/core';
import { CardData } from './get-dbdata.service';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private allViewData!: CardData[];

  public сompilationAllFilters(): CardData[] {
    return this.allViewData;
  }

  public chooseByColor(colors: string[], object: CardData[]): CardData[] {
    const colorsData = object.filter((el: CardData) =>
      colors.some((color: string) => el.color.includes(color))
    );

    return colorsData;
  }

  public chooseByRooms(room: any, product: any, object: any): CardData[] {
    return object[room][product];
  }
}
