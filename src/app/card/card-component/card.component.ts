import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';
import { LocalStorageService } from 'src/app/functionForAllProject/lcStorage/local-storage.service';
import { CardData } from 'src/app/shop-page/service/get-dbdata.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() name!: string;
  @Input() price!: number;
  @Input() img?: string;
  @Input() description?: string;
  @Input() sale?: string;

  @Input() obj!: CardData[];
  public currentProduct!: CardData;

  public totalPrice!: string;
  public salePrice!: string;
  public saleImg!: string;

  constructor(
    private _router: Router,
    private _func: FlatMapService,
    private _localStorage: LocalStorageService
  ) {}

  public set(): void {
    this._func.currentProductForCart(this.obj, this.name);
    this.currentProduct = this._func.getCurrentProductForCart();
    this._localStorage.setItem(this.currentProduct);
  }

  public goToPage(): void {
    this._router.navigate(['product']);

    this._func.currentProductForCart(this.obj, this.name!);
  }

  ngOnInit(): void {
    this.totalPrice = this._func.setPoint(this.price);

    if (this.sale != '') {
      this.salePrice = this._func.setPoint(
        this.price - (+this.sale! / 100) * this.price
      );
      this.saleImg = `/assets/img/sale${this.sale}.png`;
    }
  }
}
