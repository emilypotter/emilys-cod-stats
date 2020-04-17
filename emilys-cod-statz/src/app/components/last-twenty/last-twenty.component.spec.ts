import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTwentyComponent } from './last-twenty.component';

describe('LastTwentyComponent', () => {
  let component: LastTwentyComponent;
  let fixture: ComponentFixture<LastTwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
