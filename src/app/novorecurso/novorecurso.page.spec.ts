import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovorecursoPage } from './novorecurso.page';

describe('NovorecursoPage', () => {
  let component: NovorecursoPage;
  let fixture: ComponentFixture<NovorecursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovorecursoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovorecursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
