import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Combine1Component } from './combine1.component';

describe('Combine1Component', () => {
  let component: Combine1Component;
  let fixture: ComponentFixture<Combine1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Combine1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Combine1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
