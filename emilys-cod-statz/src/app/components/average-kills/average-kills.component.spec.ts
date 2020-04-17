import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageKillsComponent } from './average-kills.component';

describe('AverageKillsComponent', () => {
  let component: AverageKillsComponent;
  let fixture: ComponentFixture<AverageKillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageKillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageKillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
