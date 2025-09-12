import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shop-page/shop-page.module').then((m) => m.ShopPageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact-page/contact-page.module').then(
        (m) => m.ContactPageModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./single-product/single-product.module').then(
        (m) => m.SingleProductModule
      ),
  },
  {
    path: 'cartBuy',
    loadChildren: () =>
      import('./cart-for-buy/cart-for-buy.module').then(
        (m) => m.CartForBuyModule
      ),
  },
  {
    path: 'check',
    loadChildren: () =>
      import('./check-out/check-out.module').then((m) => m.CheckOutModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
