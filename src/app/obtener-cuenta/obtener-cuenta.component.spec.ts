import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerCuentaComponent } from './obtener-cuenta.component';

describe('ObtenerCuentaComponent', () => {
  let component: ObtenerCuentaComponent;
  let fixture: ComponentFixture<ObtenerCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
