import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { BannerModule } from '../banner/banner.module';
import { ShopPageRouting } from './shop-page-routing.module';
import { OnfooterModule } from '../onfooter/onfooter.module';
import { CardModule } from 'src/app/card/card.module';

@NgModule({
  declarations: [ShopComponent],
  exports: [ShopComponent, ShopPageRouting],
  imports: [CommonModule, BannerModule, OnfooterModule, CardModule],
})
export class ShopPageModule {}
