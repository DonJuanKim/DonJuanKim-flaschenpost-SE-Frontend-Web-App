import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBeerPageComponent } from './product-beer-page.component';

describe('ProductBeerPageComponent', () => {
  let component: ProductBeerPageComponent;
  let fixture: ComponentFixture<ProductBeerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductBeerPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBeerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
