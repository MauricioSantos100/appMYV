import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaManutencaoPage } from './tela-manutencao.page';

describe('TelaManutencaoPage', () => {
  let component: TelaManutencaoPage;
  let fixture: ComponentFixture<TelaManutencaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaManutencaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaManutencaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
