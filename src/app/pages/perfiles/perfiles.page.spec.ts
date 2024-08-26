import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilesPage } from './perfiles.page';

describe('PerfilesPage', () => {
  let component: PerfilesPage;
  let fixture: ComponentFixture<PerfilesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
