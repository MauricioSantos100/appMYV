import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAbastecimentoPage } from './editar-abastecimento.page';

describe('EditarAbastecimentoPage', () => {
  let component: EditarAbastecimentoPage;
  let fixture: ComponentFixture<EditarAbastecimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAbastecimentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAbastecimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
