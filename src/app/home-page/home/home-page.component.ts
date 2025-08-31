import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';

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
export class HomePageComponent {
  public path: string = 'home';

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

  public slidesCorusel: string[] = [
    '/assets/img/slide2.png',
    '/assets/img/slide3.png',
    '/assets/img/slide2.png',
    '/assets/img/slide1.png',
    '/assets/img/slide2.png',
  ];

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.currentIndexCorusel += 1;
    if (this.currentIndexCorusel === 4) {
      this.currentIndexCorusel = 0;
    }
  }
  goToSlide(index: number): void {
    this.currentIndex = index;
    this.currentIndexCorusel = index;
  }
}
