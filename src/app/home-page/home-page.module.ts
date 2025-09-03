import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home/home-page.component';
import { HomePageRouting } from './home-page-routing.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [HomePageComponent],
  exports: [HomePageComponent, HomePageRouting],
  imports: [CommonModule, CardModule, HomePageRouting],
})
export class HomePageModule {}
