import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transformation1Component } from './transformation1.component';

describe('Transformation1Component', () => {
  let component: Transformation1Component;
  let fixture: ComponentFixture<Transformation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transformation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transformation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
