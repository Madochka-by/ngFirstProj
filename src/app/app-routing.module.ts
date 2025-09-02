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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
