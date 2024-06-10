import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGestionPeriodoComponent } from './delete-gestion-periodo.component';

describe('DeleteGestionPeriodoComponent', () => {
  let component: DeleteGestionPeriodoComponent;
  let fixture: ComponentFixture<DeleteGestionPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteGestionPeriodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteGestionPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
