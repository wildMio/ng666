import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MioToggleComponent } from './mio-toggle.component';

describe('MioToggleComponent', () => {
  let component: MioToggleComponent;
  let fixture: ComponentFixture<MioToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MioToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MioToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
