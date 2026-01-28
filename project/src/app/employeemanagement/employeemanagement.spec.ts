import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeemanagement } from './employeemanagement';

describe('Employeemanagement', () => {
  let component: Employeemanagement;
  let fixture: ComponentFixture<Employeemanagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeemanagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeemanagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
