import { animate, style, transition, trigger } from '@angular/animations';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

const show = transition(':enter', [
  style({ transform: 'translateX(100%)' }),
  animate('300ms ease-out', style({ transform: 'translateX(0)' })),
]);

const unShow = transition(':leave', [
  style({ transform: 'translateX(0)' }),
  animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
]);

const transl = trigger('traslate', [show, unShow]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [transl],
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  public isShow = true;

  @ViewChild('dropDown') dropDown!: ElementRef<HTMLElement>;

  @HostListener('document:click', ['$event'])
  handleClick(event: PointerEvent): void {
    const target = event.target as HTMLElement;

    if (target.classList.contains('pi-shopping-cart')) {
      this.isShow = true;
      return;
    }
    if (!target.closest('.dropdown')) {
      this.isShow = false;
    }
  }

  ngOnInit(): void {}

  ngAfterViewChecked(): void {}
}
