import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeioPage } from './meio.page';

describe('MeioPage', () => {
  let component: MeioPage;
  let fixture: ComponentFixture<MeioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
