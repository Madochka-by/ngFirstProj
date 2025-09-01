import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { BannerModule } from '../banner/banner.module';
import { ShopPageRouting } from './shop-page-routing.module';
import { OnfooterModule } from '../onfooter/onfooter.module';
import { CardModule } from 'src/app/card/card.module';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [ShopComponent],
  exports: [ShopComponent, ShopPageRouting],
  imports: [
    CommonModule,
    BannerModule,
    OnfooterModule,
    CardModule,
    PaginatorModule,
  ],
})
export class ShopPageModule {}
