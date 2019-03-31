import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAbastecimentoPage } from './tela-abastecimento.page';

describe('TelaAbastecimentoPage', () => {
  let component: TelaAbastecimentoPage;
  let fixture: ComponentFixture<TelaAbastecimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAbastecimentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAbastecimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
