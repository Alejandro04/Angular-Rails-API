import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubCategory } from './new.component';

describe(' NewSubCategory', () => {
  let component:  NewSubCategory;
  let fixture: ComponentFixture< NewSubCategory>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  NewSubCategory ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
