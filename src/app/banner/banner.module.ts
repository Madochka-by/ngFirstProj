import { NgModule } from '@angular/core';
import { BannerLineComponent } from './banner-line/banner-line.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerLineComponent],
  exports: [BannerLineComponent],
})
export class BannerModule {}
