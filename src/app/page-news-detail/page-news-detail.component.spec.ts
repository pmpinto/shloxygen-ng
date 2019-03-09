import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewsDetailComponent } from './page-news-detail.component';

describe('PageNewsDetailComponent', () => {
  let component: PageNewsDetailComponent;
  let fixture: ComponentFixture<PageNewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
