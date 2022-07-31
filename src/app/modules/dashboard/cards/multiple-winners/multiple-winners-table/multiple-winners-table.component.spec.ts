import { MultipleWinnersTableComponent } from './multiple-winners-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

describe('MultipleWinnersTableComponent', () => {
  let component: MultipleWinnersTableComponent;
  let fixture: ComponentFixture<MultipleWinnersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatTableModule],
      declarations: [MultipleWinnersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleWinnersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two columns - year and winner count', () => {
    const validColumns = ['year', 'winnerCount'];

    expect(component.displayedColumns.length).toBe(2);
    expect(component.displayedColumns).toEqual(validColumns);
  });
});
