import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPeriodoComponent } from './gestion-periodo.component';

describe('GestionPeriodoComponent', () => {
  let component: GestionPeriodoComponent;
  let fixture: ComponentFixture<GestionPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionPeriodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
