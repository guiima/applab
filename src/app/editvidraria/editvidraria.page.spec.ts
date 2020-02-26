import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvidrariaPage } from './editvidraria.page';

describe('EditvidrariaPage', () => {
  let component: EditvidrariaPage;
  let fixture: ComponentFixture<EditvidrariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditvidrariaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvidrariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
