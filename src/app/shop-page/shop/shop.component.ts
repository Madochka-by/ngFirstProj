import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GetDBDataService } from '../service/get-dbdata.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  public KEYS: string[] = [];
  public BEDROOM: any[] = [];
  public DINING: any[] = [];
  public LIVING: any[] = [];

  constructor(private getDBDataService: GetDBDataService) {}

  public ngOnInit(): void {
    this.getDBDataService.getData().subscribe((res) => {
      Object.keys(res).forEach((key) => this.KEYS.push(key));

      this.KEYS.flatMap((key: any) => res[key]).map((key: any) => {
        if (key.chairs[0].SKU.includes('L')) {
          this.LIVING.push(key);
        } else if (key.chairs[0].SKU.includes('S')) {
          this.DINING.push(key);
        } else {
          this.BEDROOM.push(key);
        }
      });
    });
  }
}
