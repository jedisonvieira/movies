import { WinnerMovieTableComponent } from './winner-movie-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('WinnerMovieTableComponent', () => {
  let component: WinnerMovieTableComponent;
  let fixture: ComponentFixture<WinnerMovieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [WinnerMovieTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnerMovieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
