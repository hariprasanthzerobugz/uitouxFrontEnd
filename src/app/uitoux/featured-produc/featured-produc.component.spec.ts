import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProducComponent } from './featured-produc.component';

describe('FeaturedProducComponent', () => {
  let component: FeaturedProducComponent;
  let fixture: ComponentFixture<FeaturedProducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedProducComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
