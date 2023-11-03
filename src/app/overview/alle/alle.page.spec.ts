import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllePage } from './alle.page';

describe('AllePage', () => {
  let component: AllePage;
  let fixture: ComponentFixture<AllePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
