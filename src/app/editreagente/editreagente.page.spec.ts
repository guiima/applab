import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreagentePage } from './editreagente.page';

describe('EditreagentePage', () => {
  let component: EditreagentePage;
  let fixture: ComponentFixture<EditreagentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditreagentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreagentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
