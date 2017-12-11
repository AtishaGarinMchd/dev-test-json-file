import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortButtonComponent } from './sort-button.component';

describe('SortButtonComponent', () => {
  let component: SortButtonComponent;
  let fixture: ComponentFixture<SortButtonComponent>;
  let el: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortButtonComponent);
    component = fixture.componentInstance;
    component.text = 'A';
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display given text', () => {
    expect(el.textContent).toContain('A');
  });
});
