import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLineComponent } from './banner-line.component';

describe('BannerLineComponent', () => {
  let component: BannerLineComponent;
  let fixture: ComponentFixture<BannerLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerLineComponent]
    });
    fixture = TestBed.createComponent(BannerLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
