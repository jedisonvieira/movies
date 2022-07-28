import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesTableComponent } from './movies-table.component';

describe('MoviesTableComponent', () => {
  let component: MoviesTableComponent;
  let fixture: ComponentFixture<MoviesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MoviesTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
