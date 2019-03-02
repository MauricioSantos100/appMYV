import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragemPage } from './garagem.page';

describe('GaragemPage', () => {
  let component: GaragemPage;
  let fixture: ComponentFixture<GaragemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaragemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
