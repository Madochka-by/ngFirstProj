import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDBDataService } from './shop-page/service/get-dbdata.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlatMapService } from './functionForAllProject/FlatMap/flat-map.service';
import { LocalStorageService } from './functionForAllProject/lcStorage/local-storage.service';
import { FiltersService } from './shop-page/service/filters.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  providers: [
    GetDBDataService,
    FlatMapService,
    LocalStorageService,
    FiltersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
