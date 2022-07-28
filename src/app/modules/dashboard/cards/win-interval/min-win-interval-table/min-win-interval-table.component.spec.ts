import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinWinIntervalTableComponent } from './min-win-interval-table.component';

describe('MinWinIntervalTableComponent', () => {
  let component: MinWinIntervalTableComponent;
  let fixture: ComponentFixture<MinWinIntervalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinWinIntervalTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinWinIntervalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
