import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transformation2Component } from './transformation2.component';

describe('Transformation2Component', () => {
  let component: Transformation2Component;
  let fixture: ComponentFixture<Transformation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transformation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transformation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
