import { TopStudiosTableComponent } from './top-studios-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TopStudiosTableComponent', () => {
  let component: TopStudiosTableComponent;
  let fixture: ComponentFixture<TopStudiosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TopStudiosTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopStudiosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
