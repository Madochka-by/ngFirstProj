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
} from '../service/get-dbdata.service';
import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {
  public allData!: CardData[];
  public currentData!: CardData[];

  public currentPageCount: number = 1;
  public currentPageCountLeft: number = 8;

  public sub!: Subscription;

  @ViewChild('items') divSmooth!: ElementRef<HTMLElement>;

  constructor(
    private _getData: GetDBDataService,
    private _proccessingFunc: FlatMapService
  ) {}

  public ngOnInit(): void {
    this.sub = this._getData.getData().subscribe((res: CategoryOfProduct) => {
      this.allData = this._proccessingFunc.bringingDataIntoLine(res);

      this.currentData = this.allData.slice(0, 8);
    });
  }
  public onPageChange(event: any): void {
    const start = event.first;
    const end = start + event.rows;
    this.currentData = this.allData.slice(start, end);

    this.divSmooth.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    this.currentPageCount = start;
    this.currentPageCountLeft = Math.min(end, this.allData.length);
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
