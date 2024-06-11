import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGestionComponent } from './delete-gestion.component';

describe('DeleteGestionComponent', () => {
  let component: DeleteGestionComponent;
  let fixture: ComponentFixture<DeleteGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteGestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
