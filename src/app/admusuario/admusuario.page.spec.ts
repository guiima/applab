import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmusuarioPage } from './admusuario.page';

describe('AdmusuarioPage', () => {
  let component: AdmusuarioPage;
  let fixture: ComponentFixture<AdmusuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmusuarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
