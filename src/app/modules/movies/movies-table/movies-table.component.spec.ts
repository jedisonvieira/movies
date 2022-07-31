import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MoviesTableComponent } from './movies-table.component';
import { MatTableModule } from '@angular/material/table';

describe('MoviesTableComponent', () => {
  let component: MoviesTableComponent;
  let fixture: ComponentFixture<MoviesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatTableModule, MatPaginatorModule],
      declarations: [MoviesTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four columns - id, year, title, winner', () => {
    const validColumns = ['id', 'year', 'title', 'winner'];

    expect(component.displayedColumns.length).toBe(4);
    expect(component.displayedColumns).toEqual(validColumns);
  });
});
