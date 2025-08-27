import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerLineComponent } from './banner-line/banner-line.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerLineComponent],
  exports: [BannerLineComponent],
})
export class BannerModule {}
