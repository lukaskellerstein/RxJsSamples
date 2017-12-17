import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Combine3Component } from './combine3.component';

describe('Combine3Component', () => {
  let component: Combine3Component;
  let fixture: ComponentFixture<Combine3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Combine3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Combine3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
