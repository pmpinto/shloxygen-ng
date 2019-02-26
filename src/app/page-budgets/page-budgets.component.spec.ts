import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBudgetsComponent } from './page-budgets.component';

describe('PageBudgetsComponent', () => {
  let component: PageBudgetsComponent;
  let fixture: ComponentFixture<PageBudgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBudgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
