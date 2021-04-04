import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilioUsuarioComponent } from './domicilio-usuario.component';

describe('DomicilioUsuarioComponent', () => {
  let component: DomicilioUsuarioComponent;
  let fixture: ComponentFixture<DomicilioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomicilioUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomicilioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
