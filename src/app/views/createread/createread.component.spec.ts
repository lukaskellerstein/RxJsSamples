import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereadComponent } from './createread.component';

describe('CreatereadComponent', () => {
  let component: CreatereadComponent;
  let fixture: ComponentFixture<CreatereadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatereadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatereadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
