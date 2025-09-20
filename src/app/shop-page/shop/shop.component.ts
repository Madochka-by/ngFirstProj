import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  CardData,
  CategoryOfProduct,
  GetDBDataService,
  RoomsItem,
  filterPriceTotal,
  filters,
  filtersShopBy,
} from '../service/get-dbdata.service';

import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';
import { Subscription } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { FiltersService, optionsInterface } from '../service/filters.service';
import { RatingRateEvent } from 'primeng/rating';

const show = transition(':enter', [
  style({ opacity: 0, transform: 'translateX(-100%)' }),
  animate('100ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
]);

const leave = transition(':leave', [
  style({ opacity: 1, transform: 'translateX(0)' }),
  animate('100ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' })),
]);

const fadeIn = trigger('fadeIn', [show, leave]);

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [fadeIn],
})
export class ShopComponent implements OnInit, OnDestroy {
  public allData!: CardData[];
  public allDataView!: CardData[];
  public currentDataPage!: CardData[];
  public allDataForFilters!: CategoryOfProduct;

  public colorsFilter!: string[];
  public priceFilter!: filterPriceTotal[];
  public shopByRoom!: filtersShopBy;
  public ratingFilter!: number[];
  public sizeFilter!: string[];

  // public selectedPrice!: filterPriceTotal;
  public selectedIndexRadio?: filterPriceTotal;
  public ratingValue?: number;

  public currentPageCount: number = 1;
  public currentPageCountLeft: number = 8;

  public isShow: boolean = false;
  public isShowRoom: boolean[] = [false, false, false];
  public arrayColors: string[] = [];
  public arraySize: string[] = [];

  public subGetData!: Subscription;

  @ViewChild('items') items!: ElementRef<HTMLElement>;
  @ViewChild('grid') grid!: ElementRef<HTMLElement>;

  constructor(
    private _getData: GetDBDataService,
    public _func: FlatMapService,
    public _filters: FiltersService,
  ) {}

  public ngOnInit(): void {
    this.subGetData = this._getData.getData().subscribe((res: CategoryOfProduct) => {
      this.allDataView = this._func.bringingDataIntoLine(res);
      this.allData = this.allDataView;
      this.allDataForFilters = res;
      this.currentDataPage = this.allData.slice(0, 8);
    });

    this.subGetData = this._getData.getFilters().subscribe((res: filters) => {
      this.colorsFilter = res.color;
      this.priceFilter = Object.values(res.price);
      this.shopByRoom = res.shopByRoom;
      this.ratingFilter = res.rating;
      this.sizeFilter = res.size;
    });
  }

  public onPageChange(event: any): void {
    const start = event.first;
    const end = start + event.rows;
    this.currentDataPage = this.allData.slice(start, end);

    this.items.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    this.currentPageCount = start;
    this.currentPageCountLeft = Math.min(end, this.allData.length);
  }

  public updateFilters(): void {
    const options: optionsInterface = {
      roomsProduct: this.toggleRooms!,
      colors: this.arrayColors,
      price: this.selectedIndexRadio!,
      rating: this.ratingValue!,
      size: this.arraySize!,
    };
    this.allData = this._filters.compilationAllFilters(this.allDataView, this.allDataForFilters, options);
    this.currentDataPage = this.allData.slice(0, 8);
  }

  public toggleColor(color: string): void {
    if (this.arrayColors.includes(color)) {
      const index = this.arrayColors.indexOf(color);
      this.arrayColors.splice(index, 1);
    } else {
      this.arrayColors.push(color);
    }

    this.updateFilters();
  }

  public toggleSize(size: string): void {
    if (this.arraySize.includes(size)) {
      const index = this.arraySize.indexOf(size);
      this.arraySize.splice(index, 1);
    } else {
      this.arraySize.push(size);
    }

    this.updateFilters();
  }

  public toggleRooms?: { room: keyof CategoryOfProduct; product: string };

  public toggleRoom(room: keyof CategoryOfProduct, product: string): void {
    this.toggleRooms = { room, product };

    this.updateFilters();
  }

  public toggleRating(event: RatingRateEvent): number {
    this.updateFilters();
    return event.value;
  }

  public resetFilters(): void {
    this.toggleRooms = undefined;
    this.arrayColors = [];
    this.ratingValue = undefined;
    this.selectedIndexRadio = undefined;
    this.arraySize = [];

    this.allData = this.allDataView;
    this.currentDataPage = this.allData.slice(0, 8);
  }

  public ngOnDestroy(): void {
    this.subGetData.unsubscribe();
  }
}
