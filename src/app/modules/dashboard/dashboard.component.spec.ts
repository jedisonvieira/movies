import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all the four correct cards on it using class card', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-multiple-winners.card')).toBeTruthy();
    expect(compiled.querySelector('app-top-studios.card')).toBeTruthy();
    expect(compiled.querySelector('app-win-interval.card')).toBeTruthy();
    expect(compiled.querySelector('app-winner-movie.card')).toBeTruthy();
  });
});
