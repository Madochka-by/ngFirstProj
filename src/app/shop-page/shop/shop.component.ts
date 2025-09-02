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
  RoomsItem,
} from '../service/get-dbdata.service';
import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';
import { Subscription } from 'rxjs';

// export enum action {
//   сoncrete = 1,
//   all = 2,
// }

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {
  public allData!: CardData[];
  public currentData!: CardData[];

  public keysRooms!: string[];

  // public allRooms!: RoomsItem[];
  // public bedroom!: RoomsItem[];
  // public dining!: RoomsItem[];
  // public living!: RoomsItem[];

  public isShow: boolean = false;
  public isShowRoomsProducts: boolean = false;

  public currentPageCount: number = 1;
  public currentPageCountLeft: number = 8;

  public start!: number;
  public end!: number;

  public sub!: Subscription;

  @ViewChild('items') divSmooth!: ElementRef<HTMLElement>;

  constructor(
    private _getData: GetDBDataService,
    private _proccessingFunc: FlatMapService
  ) {}

  public ngOnInit(): void {
    this.sub = this._getData.getData().subscribe((res: any) => {
      this.allData = this._proccessingFunc.bringingDataIntoLine(res);

      this.keysRooms = Object.keys(res);

      this.currentData = this.allData.slice(0, 8);
    });
  }
  public onPageChange(event: any): void {
    this.start = event.first;
    this.end = this.start + event.rows;
    this.currentData = this.allData.slice(this.start, this.end);

    this.divSmooth.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    this.currentPageCount = this.start;
    this.currentPageCountLeft = Math.min(this.end, this.allData.length);
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
