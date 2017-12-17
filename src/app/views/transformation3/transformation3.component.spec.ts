import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transformation3Component } from './transformation3.component';

describe('Transformation3Component', () => {
  let component: Transformation3Component;
  let fixture: ComponentFixture<Transformation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transformation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transformation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
