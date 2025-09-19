import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChekOutComponent } from './chek-out/chek-out.component';
import { checkOutRouting } from './check_out-routing.module';
import { BannerModule } from '../banner/banner.module';
import { OnfooterModule } from 'src/app/onfooter/onfooter.module';

@NgModule({
  declarations: [ChekOutComponent],
  imports: [CommonModule, checkOutRouting, BannerModule, OnfooterModule],
  exports: [ChekOutComponent],
})
export class CheckOutModule {}
