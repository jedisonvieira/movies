import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxWinIntervalTableComponent } from './max-win-interval-table.component';

describe('MaxWinIntervalTableComponent', () => {
  let component: MaxWinIntervalTableComponent;
  let fixture: ComponentFixture<MaxWinIntervalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxWinIntervalTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxWinIntervalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
