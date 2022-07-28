import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinIntervalComponent } from './win-interval.component';

describe('WinIntervalComponent', () => {
  let component: WinIntervalComponent;
  let fixture: ComponentFixture<WinIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    //expect(component).toBeTruthy();
  });*/
});
