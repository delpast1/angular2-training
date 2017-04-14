/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FourthCompComponent } from './fourth-comp.component';

describe('FourthCompComponent', () => {
  let component: FourthCompComponent;
  let fixture: ComponentFixture<FourthCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
