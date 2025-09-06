import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SingleProductRouting } from './single-product-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'src/app/card/card.module';
import { ViewProductComponent } from './view-product/view-product.component';

@NgModule({
  declarations: [ProductComponent, ViewProductComponent],
  exports: [ProductComponent, SingleProductRouting],
  imports: [
    CommonModule,
    SingleProductRouting,
    PaginatorModule,
    CardModule,
    CardModule,
  ],
})
export class SingleProductModule {}
