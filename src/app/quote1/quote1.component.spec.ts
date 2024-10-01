import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';


import { Quote1Component } from './quote1.component';

describe('Quote1Component', () => {
  let component: Quote1Component;
  let fixture: ComponentFixture<Quote1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Quote1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Quote1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
