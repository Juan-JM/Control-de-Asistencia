import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSidenavContentComponent } from './layout-sidenav-content.component';

describe('LayoutSidenavContentComponent', () => {
  let component: LayoutSidenavContentComponent;
  let fixture: ComponentFixture<LayoutSidenavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutSidenavContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
