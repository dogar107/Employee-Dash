import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectmanagement } from './projectmanagement';

describe('Projectmanagement', () => {
  let component: Projectmanagement;
  let fixture: ComponentFixture<Projectmanagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectmanagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projectmanagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
