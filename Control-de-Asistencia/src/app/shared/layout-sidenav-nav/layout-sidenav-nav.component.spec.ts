import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSidenavNavComponent } from './layout-sidenav-nav.component';

describe('LayoutSidenavNavComponent', () => {
  let component: LayoutSidenavNavComponent;
  let fixture: ComponentFixture<LayoutSidenavNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutSidenavNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutSidenavNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
