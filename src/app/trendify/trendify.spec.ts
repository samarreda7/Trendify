import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trendify } from './trendify';

describe('Trendify', () => {
  let component: Trendify;
  let fixture: ComponentFixture<Trendify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trendify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trendify);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
