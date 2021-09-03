import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAgeContactComponent } from './get-age-contact.component';

describe('GetAgeContactComponent', () => {
  let component: GetAgeContactComponent;
  let fixture: ComponentFixture<GetAgeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAgeContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAgeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
