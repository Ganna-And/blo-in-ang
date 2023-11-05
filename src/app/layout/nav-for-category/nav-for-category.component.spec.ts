import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavForCategoryComponent } from './nav-for-category.component';

describe('NavForCategoryComponent', () => {
  let component: NavForCategoryComponent;
  let fixture: ComponentFixture<NavForCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavForCategoryComponent]
    });
    fixture = TestBed.createComponent(NavForCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
