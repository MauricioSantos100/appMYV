import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaManutencaoPage } from './nova-manutencao.page';

describe('NovaManutencaoPage', () => {
  let component: NovaManutencaoPage;
  let fixture: ComponentFixture<NovaManutencaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaManutencaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaManutencaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
