import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopStudiosComponent } from './top-studios.component';
import { MatCardModule } from '@angular/material/card';

describe('TopStudiosComponent', () => {
  let component: TopStudiosComponent;
  let fixture: ComponentFixture<TopStudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [TopStudiosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain(
      'Top 3 studios with winners'
    );
  });

  it('should have a top studios table', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-top-studios-table')).toBeTruthy();
  });
});
