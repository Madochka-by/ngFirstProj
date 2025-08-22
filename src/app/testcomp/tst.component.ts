import { Component } from '@angular/core';

@Component({
  selector: 'app-tst',
  templateUrl: './tst.component.html',
  styleUrls: ['./tst.component.scss'],
})
export class TstComponent {
  products = [
    { name: 'iPhone 15', price: 1200 },
    { name: 'Samsung Galaxy S23', price: 950 },
    { name: 'Xiaomi 13 Pro', price: 800 },
  ];
}
