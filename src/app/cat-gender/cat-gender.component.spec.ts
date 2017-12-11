import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGenderComponent } from './cat-gender.component';
import { CatDetailComponent } from '../cat-detail/cat-detail.component';

describe('CatGenderComponent', () => {
  let component: CatGenderComponent;
  let fixture: ComponentFixture<CatGenderComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CatGenderComponent,
        CatDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatGenderComponent);
    component = fixture.componentInstance;
    component.gender = 'female';
    component.cats = [{"name":"Garfield","type":"Cat"}, {"name":"Tabby","type":"Cat"}];
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a header', () => {
    expect(el.querySelector('h3').textContent).toBe('Cats owned by a female human.');
  });

  it('should contain first cat', () => {
    expect(el.querySelectorAll('cat-detail')[0]).toBeTruthy();
  });

  it('should contain second cat', () => {
    expect(el.querySelectorAll('cat-detail')[1]).toBeTruthy();
  });
});
