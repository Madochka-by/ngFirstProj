import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';
import { LocalStorageService } from 'src/app/functionForAllProject/lcStorage/local-storage.service';
import {
  CardData,
  CategoryOfProduct,
  GetDBDataService,
} from 'src/app/shop-page/service/get-dbdata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  public currentIndexPicture = 0;
  public countOfProduct: number = 1;
  public activeIndex: number = 0;
  public allData!: CardData[];
  public viewProduct!: CardData[];
  public CurrentProduct!: CardData;
  public puctures!: string[];
  public sub!: Subscription;

  public plusFunc(): void {
    this.countOfProduct += 1;
  }

  public MinusFunc(): void {
    if (this.countOfProduct > 1) {
      this.countOfProduct -= 1;
    }
  }

  public activeTit(i: number): void {
    this.activeIndex = i;
  }

  constructor(
    public _func: FlatMapService,
    private _getData: GetDBDataService,
    private _storage: LocalStorageService,
    private _messageService: MessageService
  ) {}

  public sendQuantity(quantity: number): void {
    this._storage.getQuantity(quantity);
  }

  public ngOnInit(): void {
    this.sub = this._getData.getData().subscribe((res: CategoryOfProduct) => {
      this.allData = this._func.bringingDataIntoLine(res);
      this.viewProduct = this.allData.slice(0, 4);
    });

    this.CurrentProduct = this._func.getCurrentProductForCart();
    this.puctures = this.CurrentProduct.img.map((path: string) =>
      path.replace(/\s+/g, '-')
    );
  }

  public set(): void {
    this._storage.setItem(this.CurrentProduct);
  }

  public goToSlide(index: number): void {
    this.currentIndexPicture = index;
  }

  public get currentPicture(): string[] {
    return [
      this.puctures[(this.currentIndexPicture + 1) % this.puctures.length],
      this.puctures[(this.currentIndexPicture + 2) % this.puctures.length],
    ];
  }

  public showBottomRight(): void {
    this._messageService.add({
      key: 'br',
      severity: 'success',
      summary: 'Product added to cart',
      life: 1000,
      styleClass: 'my-toast-success',
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
