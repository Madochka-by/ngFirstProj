import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() name?: string;
  @Input() price?: number;
  @Input() img?: string;
  @Input() description?: string;
}
