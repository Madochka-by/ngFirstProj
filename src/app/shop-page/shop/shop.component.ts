import { Component, OnInit } from '@angular/core';
import { GetDBDataService } from '../service/get-dbdata.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor(private getDBDataService: GetDBDataService) {}

  public allData: any[] = [];

  public ngOnInit(): void {
    this.getDBDataService.getDataFromDB().subscribe((res) => {
      this.allData = Object.values(res)
        .flatMap((room: any) => Object.values(room))
        .flatMap((category: any) => Object.values(category));

      this.getDBDataService.setData(this.allData);
    });
  }
}
