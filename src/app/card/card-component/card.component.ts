import { Component, Input, OnInit } from '@angular/core';
import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';

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

  public totalPrice!: string;
  public salePrice!: string;
  public saleImg!: string;

  public set(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  ngOnInit(): void {
    this.totalPrice = this.set(this.price);

    if (this.sale != '') {
      this.salePrice = this.set(this.price - (+this.sale! / 100) * this.price);
      this.saleImg = `/assets/img/sale${this.sale}.png`;
    }
    console.log(this.saleImg);
  }
}
