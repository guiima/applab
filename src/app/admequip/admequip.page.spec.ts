import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmequipPage } from './admequip.page';

describe('AdmequipPage', () => {
  let component: AdmequipPage;
  let fixture: ComponentFixture<AdmequipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmequipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmequipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
