import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TstComponent } from './testcomp/tst.component';

const routes: Routes = [
  {
    path: '',
    component: TstComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
