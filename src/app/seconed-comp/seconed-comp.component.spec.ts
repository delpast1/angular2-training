/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeconedCompComponent } from './seconed-comp.component';

describe('SeconedCompComponent', () => {
  let component: SeconedCompComponent;
  let fixture: ComponentFixture<SeconedCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeconedCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
