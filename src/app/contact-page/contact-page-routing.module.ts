import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponentComponent } from './contact-component/contact-component.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPageRouting {}
