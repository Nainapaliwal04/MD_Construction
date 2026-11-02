import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pmc } from './pmc';

describe('Pmc', () => {
  let component: Pmc;
  let fixture: ComponentFixture<Pmc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pmc],
    }).compileComponents();

    fixture = TestBed.createComponent(Pmc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
