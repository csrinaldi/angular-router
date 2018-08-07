import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAsyncComponent } from './test.component';

describe('TestComponent', () => {
  let component: TAsyncComponent;
  let fixture: ComponentFixture<TAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
