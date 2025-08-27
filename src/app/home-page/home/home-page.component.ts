import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public products: string[] = [
    'assets/img/image 1.png',
    'assets/img/image 1.png',
    'assets/img/image 1.png',
    'assets/img/image 1.png',
  ];
}
