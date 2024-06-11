import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGestionComponent } from './update-gestion.component';

describe('UpdateGestionComponent', () => {
  let component: UpdateGestionComponent;
  let fixture: ComponentFixture<UpdateGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateGestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
