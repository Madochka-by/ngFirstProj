import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';
import {
  CardData,
  GetDBDataService,
} from 'src/app/shop-page/service/get-dbdata.service';

export interface slide {
  id: number;
  img: string;
  title: string;
  category: string;
}

const incrementTransition = transition(':increment', [
  style({ opacity: 0 }),
  animate('0.2s ease-out', style({ opacity: 1 })),
]);

const decrementTransition = transition(':decrement', [
  style({ opacity: 0 }),
  animate('0.2s ease-out', style({ opacity: 1 })),
]);

const fadeIn = trigger('fadeIn', [incrementTransition, decrementTransition]);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fadeIn],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(
    private _getData: GetDBDataService,
    private _proccessingFunc: FlatMapService
  ) {}

  public sub!: Subscription;

  public path: string = 'home';

  public allData!: CardData[];

  public currentIndex: number = 0;
  public currentIndexCorusel: number = 0;

  public slides: slide[] = [
    {
      id: 1,
      img: '/assets/img/slide1.png',
      title: 'Inner Peace',
      category: 'Bed Room',
    },
    {
      id: 2,
      img: '/assets/img/slide2.png',
      title: 'Peace Inner',
      category: 'Living Room',
    },
    {
      id: 3,
      img: '/assets/img/slide3.png',
      title: 'Inner Bed',
      category: 'Dinning',
    },
    {
      id: 4,
      img: '/assets/img/slide2.png',
      title: 'Chair chevron',
      category: 'Bed Room',
    },
  ];

  public get carouselSlide(): slide[] {
    return [
      this.slides[(this.currentIndexCorusel + 1) % this.slides.length],
      this.slides[(this.currentIndexCorusel + 2) % this.slides.length],
    ];
  }

  public nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.currentIndexCorusel += 1;
    if (this.currentIndexCorusel === 4) {
      this.currentIndexCorusel = 0;
    }
  }
  public goToSlide(index: number): void {
    this.currentIndex = index;
    this.currentIndexCorusel = index;
  }

  public ngOnInit(): void {
    this.sub = this._getData.getData().subscribe((res: any) => {
      this.allData = this._proccessingFunc.bringingDataIntoLine(res);
      console.log(this.allData);
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
