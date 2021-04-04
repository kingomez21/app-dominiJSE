import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductoUsuarioComponent } from './lista-producto-usuario.component';

describe('ListaProductoUsuarioComponent', () => {
  let component: ListaProductoUsuarioComponent;
  let fixture: ComponentFixture<ListaProductoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProductoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
