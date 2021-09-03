import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticleContactComponent } from './list-article-contact.component';

describe('ListArticleContactComponent', () => {
  let component: ListArticleContactComponent;
  let fixture: ComponentFixture<ListArticleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArticleContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
