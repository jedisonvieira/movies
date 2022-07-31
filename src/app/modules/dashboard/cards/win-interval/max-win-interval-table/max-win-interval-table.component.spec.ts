import { MaxWinIntervalTableComponent } from './max-win-interval-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

describe('MaxWinIntervalTableComponent', () => {
  let component: MaxWinIntervalTableComponent;
  let fixture: ComponentFixture<MaxWinIntervalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [MaxWinIntervalTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaxWinIntervalTableComponent);
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
