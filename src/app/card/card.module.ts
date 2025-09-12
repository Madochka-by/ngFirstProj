import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card-component/card.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ToastModule, ButtonModule],
  exports: [CardComponent],
  providers: [MessageService],
})
export class CardModule {}
