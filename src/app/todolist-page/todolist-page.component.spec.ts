import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistPageComponent } from './todolist-page.component';

describe('TodolistPageComponent', () => {
  let component: TodolistPageComponent;
  let fixture: ComponentFixture<TodolistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodolistPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodolistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
