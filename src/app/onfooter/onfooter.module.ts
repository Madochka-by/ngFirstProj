import { NgModule } from '@angular/core';
import { OnfooterComponent } from './onfooter-components/onfooter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [OnfooterComponent],
  exports: [OnfooterComponent],
})
export class OnfooterModule {}
