import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerMovieComponent } from './winner-movie.component';

describe('WinnerMovieComponent', () => {
  let component: WinnerMovieComponent;
  let fixture: ComponentFixture<WinnerMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
