import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskmanagement } from './taskmanagement';

describe('Taskmanagement', () => {
  let component: Taskmanagement;
  let fixture: ComponentFixture<Taskmanagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taskmanagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taskmanagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
