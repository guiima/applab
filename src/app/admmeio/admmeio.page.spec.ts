import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmmeioPage } from './admmeio.page';

describe('AdmmeioPage', () => {
  let component: AdmmeioPage;
  let fixture: ComponentFixture<AdmmeioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmmeioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmmeioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
