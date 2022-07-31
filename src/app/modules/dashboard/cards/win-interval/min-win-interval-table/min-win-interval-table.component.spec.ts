import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { MinWinIntervalTableComponent } from './min-win-interval-table.component';

describe('MinWinIntervalTableComponent', () => {
  let component: MinWinIntervalTableComponent;
  let fixture: ComponentFixture<MinWinIntervalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [MinWinIntervalTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MinWinIntervalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four columns - producer,interval,previousWin,followingWin', () => {
    const validColumns = [
      'producer',
      'interval',
      'previousWin',
      'followingWin',
    ];

    expect(component.displayedColumns.length).toBe(4);
    expect(component.displayedColumns).toEqual(validColumns);
  });
});
