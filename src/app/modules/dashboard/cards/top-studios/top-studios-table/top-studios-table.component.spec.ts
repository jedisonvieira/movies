import { TopStudiosTableComponent } from './top-studios-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

describe('TopStudiosTableComponent', () => {
  let component: TopStudiosTableComponent;
  let fixture: ComponentFixture<TopStudiosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatTableModule],
      declarations: [TopStudiosTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopStudiosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two columns - name and win count', () => {
    const validColumns = ['name', 'winCount'];

    expect(component.displayedColumns.length).toBe(2);
    expect(component.displayedColumns).toEqual(validColumns);
  });
});
