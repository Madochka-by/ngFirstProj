import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnfooterComponent } from './onfooter.component';

describe('OnfooterComponent', () => {
  let component: OnfooterComponent;
  let fixture: ComponentFixture<OnfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnfooterComponent]
    });
    fixture = TestBed.createComponent(OnfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
