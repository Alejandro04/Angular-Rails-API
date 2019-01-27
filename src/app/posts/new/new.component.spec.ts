import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPost } from './new.component';

describe('NewPost', () => {
  let component: NewPost;
  let fixture: ComponentFixture<NewPost>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPost ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
