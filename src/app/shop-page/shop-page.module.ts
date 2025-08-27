import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { BannerModule } from '../banner/banner.module';
import { ShopPageRouting } from './shop-page-routing.module';

@NgModule({
  imports: [CommonModule, BannerModule],
  declarations: [ShopComponent],
  exports: [ShopComponent, ShopPageRouting],
})
export class ShopPageModule {}
