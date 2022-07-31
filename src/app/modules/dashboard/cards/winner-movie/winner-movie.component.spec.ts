import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinnerMovieComponent } from './winner-movie.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WinnerMovieComponent', () => {
  let component: WinnerMovieComponent;
  let fixture: ComponentFixture<WinnerMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [WinnerMovieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnerMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain(
      'Winner movies by year'
    );
  });

  it('should have a winner movie table', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-winner-movie-table')).toBeTruthy();
  });

  it('should have an input field for filtering parameter', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input')).toBeTruthy();
  });

  it('should have a button to trigger the filtering', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')).toBeTruthy();
    expect(compiled.querySelector('mat-icon')?.textContent).toContain('search');
  });
});
