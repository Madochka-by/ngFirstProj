import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ContactPageRouting } from './contact-page-routing.module';
import { BannerModule } from 'src/app/banner/banner.module';
import { OnfooterModule } from '../onfooter/onfooter.module';

@NgModule({
  declarations: [ContactComponentComponent],
  imports: [CommonModule, BannerModule, OnfooterModule],
  exports: [ContactComponentComponent, ContactPageRouting],
})
export class ContactPageModule {}
