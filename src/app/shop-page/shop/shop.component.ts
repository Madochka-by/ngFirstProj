import { Component, OnInit } from '@angular/core';
import { GetDBDataService } from '../service/get-dbdata.service';
import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  public allData: any[] = [];
  public currentData: any[] = [];

  constructor(
    private _getData: GetDBDataService,
    private _proccessingFunc: FlatMapService
  ) {}

  ngOnInit(): void {
    this._getData.getData().subscribe((res: any) => {
      this.allData = this._proccessingFunc.bringingDataIntoLine(res);

      this.currentData = this.allData.slice(0, 8);
    });
  }
  onPageChange(event: any) {
    const start = event.first;
    const end = start + event.rows;
    this.currentData = this.allData.slice(start, end);
  }
}
