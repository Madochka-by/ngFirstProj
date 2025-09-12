import { Component, OnInit } from '@angular/core';
import { FlatMapService } from 'src/app/functionForAllProject/FlatMap/flat-map.service';
import {
  LocalStorageService,
  storage,
} from 'src/app/functionForAllProject/lcStorage/local-storage.service';

@Component({
  selector: 'app-chek-out',
  templateUrl: './chek-out.component.html',
  styleUrls: ['./chek-out.component.scss'],
})
export class ChekOutComponent implements OnInit {
  public localData!: storage[];
  public totalSum!: string;

  constructor(
    private _storage: LocalStorageService,
    public _func: FlatMapService
  ) {}

  public ngOnInit(): void {
    this.localData = this._storage.getItem();
    this.totalSum = this._func.calculateTotalPriceForCart();
  }
}
