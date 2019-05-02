import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDespesaPage } from './editar-despesa.page';

describe('EditarDespesaPage', () => {
  let component: EditarDespesaPage;
  let fixture: ComponentFixture<EditarDespesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDespesaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDespesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
