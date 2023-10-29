import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignmentPage } from './assignment.page';

describe('AssignmentPage', () => {
  let component: AssignmentPage;
  let fixture: ComponentFixture<AssignmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssignmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
