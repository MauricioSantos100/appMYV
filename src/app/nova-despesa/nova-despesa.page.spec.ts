import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaDespesaPage } from './nova-despesa.page';

describe('NovaDespesaPage', () => {
  let component: NovaDespesaPage;
  let fixture: ComponentFixture<NovaDespesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaDespesaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaDespesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
