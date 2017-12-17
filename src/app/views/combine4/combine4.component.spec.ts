import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Combine4Component } from './combine4.component';

describe('Combine4Component', () => {
  let component: Combine4Component;
  let fixture: ComponentFixture<Combine4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Combine4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Combine4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
