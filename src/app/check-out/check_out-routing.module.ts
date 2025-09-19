import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChekOutComponent } from './chek-out/chek-out.component';

const routes: Routes = [
  {
    path: '',
    component: ChekOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class checkOutRouting {}
