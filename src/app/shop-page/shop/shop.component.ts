import { Component, OnInit } from '@angular/core';
import { GetDBDataService } from '../service/get-dbdata.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor(private getDBDataService: GetDBDataService) {}

  public ngOnInit(): void {
    this.getDBDataService.getData().subscribe((res) => console.log(res));
  }
}
