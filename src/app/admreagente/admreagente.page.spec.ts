import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmreagentePage } from './admreagente.page';

describe('AdmreagentePage', () => {
  let component: AdmreagentePage;
  let fixture: ComponentFixture<AdmreagentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmreagentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmreagentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
