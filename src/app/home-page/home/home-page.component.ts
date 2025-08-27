import { Component } from '@angular/core';

export interface slide {
  id: number;
  img: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public currentIndex: number = 0;

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
      img: '/assets/img/slide1.png',
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

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
