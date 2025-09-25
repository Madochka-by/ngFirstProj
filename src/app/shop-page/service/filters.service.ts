import { Injectable, Optional } from '@angular/core';
import { CardData, CategoryOfProduct, filterPriceTotal } from './get-dbdata.service';

export interface optionsInterface {
  roomsProduct: { room: keyof CategoryOfProduct; product: string };
  colors: string[];
  price: filterPriceTotal;
  rating: number;
  size: string[];
}

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  public compilationAllFilters(Object: CardData[], resObject: any, options: optionsInterface): CardData[] {
    let result: CardData[] = Object;

    if (options.roomsProduct) {
      const room: keyof CategoryOfProduct = options.roomsProduct.room;
      const pdocut: string = options.roomsProduct.product;

      result = result.filter((el: CardData) => resObject[room][pdocut].includes(el));
    }

    if (options.colors?.length) {
      result = result.filter((el: CardData) => options.colors.some((colors: string) => el.color.includes(colors)));
    }

    if (options.price) {
      result = result.filter((el: CardData) => el.price >= options.price.min && el.price <= options.price.max);
    }

    if (options.rating) {
      console.log(
        result.map((el: any) => el.rating),
        options.rating,
      );

      result = result.filter((el: CardData) => el.rating >= options.rating && el.rating <= options.rating + 0.9);
    }

    if (options.size?.length) {
      result = result.filter((el: CardData) => options.size.some((sizes: string) => el.size.includes(sizes)));
    }

    return result;
  }
}
