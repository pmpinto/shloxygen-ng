import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompanyComponent } from './page-company.component';

describe('PageCompanyComponent', () => {
  let component: PageCompanyComponent;
  let fixture: ComponentFixture<PageCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
