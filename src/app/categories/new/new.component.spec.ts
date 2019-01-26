import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCategory } from './new.component';

describe('NewCategory', () => {
  let component: NewCategory;
  let fixture: ComponentFixture<NewCategory>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCategory ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
