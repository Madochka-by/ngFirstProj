import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GetDBDataService } from '../service/get-dbdata.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  public path: string = 'shop';
  public title: string = 'shop';

  public KEYS: string[] = [];
  public parsedData: any[] = [];
  public BEDROOM: any[] = [];
  public DINING: any[] = [];
  public LIVING: any[] = [];

  constructor(private getDBDataService: GetDBDataService) {}

  public ngOnInit(): void {
    this.getDBDataService.getData().subscribe((res) => {});
  }
}
