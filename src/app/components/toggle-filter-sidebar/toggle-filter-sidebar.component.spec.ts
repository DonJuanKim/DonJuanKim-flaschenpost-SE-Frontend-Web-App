import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFilterSidebarComponent } from './toggle-filter-sidebar.component';

describe('ToggleFilterSidebarComponent', () => {
  let component: ToggleFilterSidebarComponent;
  let fixture: ComponentFixture<ToggleFilterSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleFilterSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleFilterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
