import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDetailComponent } from './cat-detail.component';

describe('CatDetailComponent', () => {
  let component: CatDetailComponent;
  let fixture: ComponentFixture<CatDetailComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDetailComponent);
    component = fixture.componentInstance;
    component.cat = {"name":"Garfield","type":"Cat"};
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should dislay cats name', () => {
    expect(el.textContent).toContain('Garfield');
  });
});
