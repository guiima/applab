import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmvidrariaPage } from './admvidraria.page';

describe('AdmvidrariaPage', () => {
  let component: AdmvidrariaPage;
  let fixture: ComponentFixture<AdmvidrariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmvidrariaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmvidrariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
