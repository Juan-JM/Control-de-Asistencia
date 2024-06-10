import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGestionPeriodoComponent } from './update-gestion-periodo.component';

describe('UpdateGestionPeriodoComponent', () => {
  let component: UpdateGestionPeriodoComponent;
  let fixture: ComponentFixture<UpdateGestionPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateGestionPeriodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateGestionPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
