import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCarreraComponent } from './delete-carrera.component';

describe('DeleteCarreraComponent', () => {
  let component: DeleteCarreraComponent;
  let fixture: ComponentFixture<DeleteCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCarreraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
