import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Combine2Component } from './combine2.component';

describe('Combine2Component', () => {
  let component: Combine2Component;
  let fixture: ComponentFixture<Combine2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Combine2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Combine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
