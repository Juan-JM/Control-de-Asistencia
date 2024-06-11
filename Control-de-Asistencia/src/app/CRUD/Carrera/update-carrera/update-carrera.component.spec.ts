import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarreraComponent } from './update-carrera.component';

describe('UpdateCarreraComponent', () => {
  let component: UpdateCarreraComponent;
  let fixture: ComponentFixture<UpdateCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCarreraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
