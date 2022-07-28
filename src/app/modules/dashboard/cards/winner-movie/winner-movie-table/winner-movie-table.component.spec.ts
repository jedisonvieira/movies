import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerMovieTableComponent } from './winner-movie-table.component';

describe('WinnerMovieTableComponent', () => {
  let component: WinnerMovieTableComponent;
  let fixture: ComponentFixture<WinnerMovieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerMovieTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerMovieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    //expect(component).toBeTruthy();
  });*/
});
