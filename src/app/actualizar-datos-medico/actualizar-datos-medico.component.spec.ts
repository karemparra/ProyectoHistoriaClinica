import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDatosMedicoComponent } from './actualizar-datos-medico.component';

describe('ActualizarDatosMedicoComponent', () => {
  let component: ActualizarDatosMedicoComponent;
  let fixture: ComponentFixture<ActualizarDatosMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDatosMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDatosMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
