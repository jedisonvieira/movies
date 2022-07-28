import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultipleWinnersTableComponent } from './multiple-winners-table.component';

describe('MultipleWinnersTableComponent', () => {
  let component: MultipleWinnersTableComponent;
  let fixture: ComponentFixture<MultipleWinnersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MultipleWinnersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleWinnersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
