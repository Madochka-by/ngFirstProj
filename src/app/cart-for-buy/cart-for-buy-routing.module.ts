import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartBuyComponent } from './cart-buy/cart-buy.component';

const routes: Routes = [
  {
    path: '',
    component: CartBuyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartForBuyRouting {}
