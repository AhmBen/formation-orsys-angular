import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommentLoginComponent } from './detail-comment-login.component';

describe('DetailCommentLoginComponent', () => {
  let component: DetailCommentLoginComponent;
  let fixture: ComponentFixture<DetailCommentLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCommentLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCommentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
