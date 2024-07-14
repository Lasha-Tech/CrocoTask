import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPopupComponent } from './posts-popup.component';

describe('PostsPopupComponent', () => {
  let component: PostsPopupComponent;
  let fixture: ComponentFixture<PostsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
