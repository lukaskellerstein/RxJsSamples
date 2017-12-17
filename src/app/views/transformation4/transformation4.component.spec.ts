import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transformation4Component } from './transformation4.component';

describe('Transformation4Component', () => {
  let component: Transformation4Component;
  let fixture: ComponentFixture<Transformation4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transformation4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transformation4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
