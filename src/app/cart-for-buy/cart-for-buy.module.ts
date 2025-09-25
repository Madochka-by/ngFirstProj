import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBuyComponent } from './cart-buy/cart-buy.component';
import { CartForBuyRouting } from './cart-for-buy-routing.module';
import { BannerModule } from '../banner/banner.module';
import { OnfooterModule } from 'src/app/onfooter/onfooter.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartBuyComponent],
  imports: [
    CommonModule,
    CartForBuyRouting,
    BannerModule,
    OnfooterModule,
    FormsModule,
  ],
  exports: [CartBuyComponent],
})
export class CartForBuyModule {}
