import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  CardData,
  CategoryOfProduct,
  GetDBDataService,
  filterPriceTotal,
  filters,
  filtersShopBy,
} from '../service/get-dbdata.service';

import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';
import { Subscription } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { FiltersService } from '../service/filters.service';

const show = transition(':enter', [
  style({ opacity: 0, transform: 'translateX(-100%)' }),
  animate('100ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
]);

const leave = transition(':leave', [
  style({ opacity: 1, transform: 'translateX(0)' }),
  animate(
    '100ms ease-in',
    style({ opacity: 0, transform: 'translateX(-100%)' })
  ),
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
  public viewDataFilt!: CardData[];
  public allDataForFilters!: CategoryOfProduct;
  public currentDataPage!: CardData[];

  public colorsFilter!: string[];
  public priceFilter!: filterPriceTotal[];
  public shopByRoom!: filtersShopBy;
  public ratingFilter!: number[];

  public currentPageCount: number = 1;
  public currentPageCountLeft: number = 8;

  public isShow: boolean = false;
  public isShowRoom: boolean[] = [false, false, false];
  public arrayColors: string[] = [];

  public subGetData!: Subscription;

  @ViewChild('items') items!: ElementRef<HTMLElement>;
  @ViewChild('grid') grid!: ElementRef<HTMLElement>;

  constructor(
    private _getData: GetDBDataService,
    private _func: FlatMapService,
    public _filters: FiltersService
  ) {}

  public ngOnInit(): void {
    this.subGetData = this._getData
      .getData()
      .subscribe((res: CategoryOfProduct) => {
        this.allData = this._func.bringingDataIntoLine(res);
        this.viewDataFilt = this.allData;

        this.allDataForFilters = res;

        this.currentDataPage = this.allData.slice(0, 8);
      });

    this.subGetData = this._getData.getFilters().subscribe((res: filters) => {
      this.colorsFilter = res.color;
      this.priceFilter = Object.values(res.price);
      this.shopByRoom = res.shopByRoom;
      this.ratingFilter = res.rating;
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
  public toggleColor(color: string): void {
    if (this.arrayColors.includes(color)) {
      const index = this.arrayColors.indexOf(color);
      this.arrayColors.splice(index, 1);
    } else {
      this.arrayColors.push(color);
    }
    if (this.arrayColors.length != 0) {
      this.currentDataPage = this._filters
        .chooseByColor(this.arrayColors, this.viewDataFilt)
        .slice(0, 8);
      this.allData = this._filters.chooseByColor(
        this.arrayColors,
        this.viewDataFilt
      );
    } else {
      this.allData = this.viewDataFilt;
      this.currentDataPage = this.allData.slice(0, 8);
    }
  }

  public ngOnDestroy(): void {
    this.subGetData.unsubscribe();
  }
}
