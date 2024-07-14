import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardsPageComponent } from './post-cards-page.component';

describe('PostCardsPageComponent', () => {
  let component: PostCardsPageComponent;
  let fixture: ComponentFixture<PostCardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
