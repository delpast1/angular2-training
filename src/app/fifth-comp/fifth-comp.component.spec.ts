/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FifthCompComponent } from './fifth-comp.component';

describe('FifthCompComponent', () => {
  let component: FifthCompComponent;
  let fixture: ComponentFixture<FifthCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
