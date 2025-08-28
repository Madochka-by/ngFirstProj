import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { BannerModule } from '../banner/banner.module';
import { ShopPageRouting } from './shop-page-routing.module';
import { OnfooterModule } from '../onfooter/onfooter.module';

@NgModule({
  imports: [CommonModule, BannerModule, OnfooterModule],
  declarations: [ShopComponent],
  exports: [ShopComponent, ShopPageRouting],
})
export class ShopPageModule {}
