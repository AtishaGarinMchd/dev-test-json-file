import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGenderComponent } from './cat-gender.component';

describe('CatGenderComponent', () => {
  let component: CatGenderComponent;
  let fixture: ComponentFixture<CatGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
