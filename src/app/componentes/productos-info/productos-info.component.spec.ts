import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosInfoComponent } from './productos-info.component';

describe('ProductosInfoComponent', () => {
  let component: ProductosInfoComponent;
  let fixture: ComponentFixture<ProductosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
