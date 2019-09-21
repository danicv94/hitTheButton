import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPage } from './multi.page';

describe('MultiPage', () => {
  let component: MultiPage;
  let fixture: ComponentFixture<MultiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
