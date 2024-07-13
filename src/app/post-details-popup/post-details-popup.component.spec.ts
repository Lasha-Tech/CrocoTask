import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsPopupComponent } from './post-details-popup.component';

describe('PostDetailsPopupComponent', () => {
  let component: PostDetailsPopupComponent;
  let fixture: ComponentFixture<PostDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetailsPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
