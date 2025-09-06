import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';
import { CardData } from 'src/app/shop-page/service/get-dbdata.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() name?: string;
  @Input() price!: number;
  @Input() img?: string;
  @Input() description?: string;
  @Input() sale?: string;

  @Input() obj!: CardData[];
  public currentProduct!: CardData[];

  public totalPrice!: string;
  public salePrice!: string;
  public saleImg!: string;

  public set(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  constructor(private router: Router, private currentProd: FlatMapService) {}

  public goToPage(): void {
    this.router.navigate(['product']);

    this.currentProd.currentProductForCart(this.obj, this.name!);
  }

  ngOnInit(): void {
    this.totalPrice = this.set(this.price);

    if (this.sale != '') {
      this.salePrice = this.set(this.price - (+this.sale! / 100) * this.price);
      this.saleImg = `/assets/img/sale${this.sale}.png`;
    }
  }
}
