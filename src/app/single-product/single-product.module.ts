import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SingleProductRouting } from './single-product-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'src/app/card/card.module';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent, SingleProductRouting],
  imports: [
    CommonModule,
    SingleProductRouting,
    PaginatorModule,
    CardModule,
    ToastModule,
    ButtonModule,
  ],
})
export class SingleProductModule {}
