import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNegocioComponent } from './panel-negocio.component';

describe('PanelNegocioComponent', () => {
  let component: PanelNegocioComponent;
  let fixture: ComponentFixture<PanelNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
