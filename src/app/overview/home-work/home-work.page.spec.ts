import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeWorkPage } from './home-work.page';

describe('HomeWorkPage', () => {
  let component: HomeWorkPage;
  let fixture: ComponentFixture<HomeWorkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
