import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UitouxComponent } from './uitoux.component';

describe('UitouxComponent', () => {
  let component: UitouxComponent;
  let fixture: ComponentFixture<UitouxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UitouxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UitouxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
