/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SixthCompComponent } from './sixth-comp.component';

describe('SixthCompComponent', () => {
  let component: SixthCompComponent;
  let fixture: ComponentFixture<SixthCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
