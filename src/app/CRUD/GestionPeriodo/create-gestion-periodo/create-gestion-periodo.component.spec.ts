import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGestionPeriodoComponent } from './create-gestion-periodo.component';

describe('CreateGestionPeriodoComponent', () => {
  let component: CreateGestionPeriodoComponent;
  let fixture: ComponentFixture<CreateGestionPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateGestionPeriodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateGestionPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
