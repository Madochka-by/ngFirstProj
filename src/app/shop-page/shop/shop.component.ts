import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
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
export class ShopComponent implements OnInit, OnDestroy, AfterViewInit {
  public allData!: CardData[];
  public currentDataPage!: CardData[];

  public colorsFilter!: string[];
  public priceFilter!: filterPriceTotal[];
  public shopByRoom!: filtersShopBy;
  public ratingFilter!: number[];

  public currentPageCount: number = 1;
  public currentPageCountLeft: number = 8;

  public isShow: boolean = false;
  public isShowRoom: boolean[] = [false, false, false];
  public isShowColor: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  public subGetData!: Subscription;
  public subGetFiltes!: Subscription;

  @ViewChild('items') items!: ElementRef<HTMLElement>;
  @ViewChildren('colors') colorsElement!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('grid') grid!: ElementRef<HTMLElement>;

  constructor(
    private _getData: GetDBDataService,
    private _proccessingFunc: FlatMapService
  ) {}

  public ngOnInit(): void {
    this.subGetData = this._getData
      .getData()
      .subscribe((res: CategoryOfProduct) => {
        this.allData = this._proccessingFunc.bringingDataIntoLine(res);

        this.currentDataPage = this.allData.slice(0, 8);
      });

    this.subGetFiltes = this._getData.getFilters().subscribe((res: filters) => {
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

  public focusColor(i: number): void {
    const el: HTMLElement = this.colorsElement.toArray()[i].nativeElement;
    if (this.isShowColor[i]) {
      el.style.scale = '1.5';
    } else {
      el.style.scale = '1';
    }
  }

  ngAfterViewInit(): void {
    if (this.isShow) {
      this.items.nativeElement.style.display = 'grid';
      this.grid.nativeElement.style.gridTemplateColumns = 'repeat(3,1fr)';
    } else {
      this.items.nativeElement.style.display = 'block';
      this.grid.nativeElement.style.gridTemplateColumns = 'repeat(4,1fr)';
    }
  }

  public ngOnDestroy(): void {
    this.subGetData.unsubscribe();
    this.subGetFiltes.unsubscribe();
  }
}
