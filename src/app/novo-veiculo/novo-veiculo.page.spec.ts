import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoVeiculoPage } from './novo-veiculo.page';

describe('NovoVeiculoPage', () => {
  let component: NovoVeiculoPage;
  let fixture: ComponentFixture<NovoVeiculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoVeiculoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoVeiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
