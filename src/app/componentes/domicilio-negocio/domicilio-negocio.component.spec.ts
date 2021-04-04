import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilioNegocioComponent } from './domicilio-negocio.component';

describe('DomicilioNegocioComponent', () => {
  let component: DomicilioNegocioComponent;
  let fixture: ComponentFixture<DomicilioNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomicilioNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomicilioNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
