import { WinnerMovieTableComponent } from './winner-movie-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

describe('WinnerMovieTableComponent', () => {
  let component: WinnerMovieTableComponent;
  let fixture: ComponentFixture<WinnerMovieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatTableModule, MatPaginatorModule],
      declarations: [WinnerMovieTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnerMovieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three columns - id, year, title', () => {
    const validColumns = ['id', 'year', 'title'];

    expect(component.displayedColumns.length).toBe(3);
    expect(component.displayedColumns).toEqual(validColumns);
  });
});
