import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHeader]',
})
export class HeaderDirective {
  @Output() changeWidth = new EventEmitter<number>();

  constructor() {
    this.changeWidth.emit(window.innerWidth);
  }

  @HostListener('window:resize')
  onResize() {
    this.changeWidth.emit(window.innerWidth);
  }
}
