import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinIntervalComponent } from './win-interval.component';
import { MatCardModule } from '@angular/material/card';

describe('WinIntervalComponent', () => {
  let component: WinIntervalComponent;
  let fixture: ComponentFixture<WinIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatCardModule],
      declarations: [WinIntervalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WinIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h3')?.textContent).toContain(
      'Producers with longest and shortest win intevals between wins'
    );
  });

  it('hould have the correct sub-titles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('h4').length).toBeGreaterThan(1);
    expect(compiled.querySelector('h4#max')?.textContent).toContain('Maximum');
    expect(compiled.querySelector('h4#min')?.textContent).toContain('Minimum');
  });

  it('should have the Maximum and Minimum tables', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-max-win-interval-table')).toBeTruthy();
    expect(compiled.querySelector('app-min-win-interval-table')).toBeTruthy();
  });
});
