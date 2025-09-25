import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import {
  LocalStorageService,
  storage,
} from '../functionForAllProject/lcStorage/local-storage.service';
import { FlatMapService } from '../functionForAllProject/FlatMap/flat-map.service';
import { HeaderDirective } from './directive/header.directive';

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
export class HeaderComponent implements OnInit {
  public isShow = false;
  public storageData!: storage[];
  public picture: string[] = [];
  public sidebarVisible: boolean = false;
  public windowWidth: number = window.innerWidth;
  public display: boolean = false;

  @ViewChild('dropDown') dropDown!: ElementRef<HTMLElement>;

  constructor(
    public _storage: LocalStorageService,
    public _func: FlatMapService,
  ) {}

  ngOnInit(): void {
    console.log(this.windowWidth);
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: PointerEvent): void {
    const target = event.target as HTMLElement;

    if (target.classList.contains('pi-shopping-cart') || target.classList.contains('click')) {
      this.isShow = true;
      this.storageData = this._storage.getItem();
      this.storageData.map((el) => {
        this.picture.push(el.img.replace(/\s+/g, '-'));
      });
    } else if (!target.closest('.dropdown')) {
      this.isShow = false;
    }
  }

  public delItem(index: number): void {
    this._storage.deleteItem(index);
    this.storageData.splice(index, 1);
  }
}
