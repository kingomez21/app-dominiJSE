import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductoNegocioComponent } from './lista-producto-negocio.component';

describe('ListaProductoNegocioComponent', () => {
  let component: ListaProductoNegocioComponent;
  let fixture: ComponentFixture<ListaProductoNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProductoNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductoNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
