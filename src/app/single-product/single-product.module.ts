import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SingleProductRouting } from './single-product-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'src/app/card/card.module';

@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent, SingleProductRouting],
  imports: [CommonModule, SingleProductRouting, PaginatorModule, CardModule],
})
export class SingleProductModule {}
