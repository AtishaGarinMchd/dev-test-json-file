import { TestBed, async, ComponentFixtureAutoDetect, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PersonsService } from './persons.service';
import { CatGenderComponent } from './cat-gender/cat-gender.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { SortButtonComponent } from './sort-button/sort-button.component';
import { SortUnderscoreDirective } from './sort-underscore.directive';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';

let fixture: ComponentFixture<AppComponent>;
let personsServiceStub: any;
let compAng: AppComponent
let compHtml: HTMLElement;

describe('AppComponent should work fine', () => {
  beforeEach(async(() => {
    class personsServiceStub {
      getPersons = function() { 
        let data = [{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]}];
        return Observable.from(data);
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CatGenderComponent,
        CatDetailComponent,
        SortButtonComponent,
        SortUnderscoreDirective
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: PersonsService, useClass: personsServiceStub }
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
 
    personsServiceStub = TestBed.get(PersonsService);
  
    compAng = fixture.componentInstance;
    compAng.maleCats = [{name: "Garfield"}];
    compAng.femaleCats = [{name: "Simba"}];
    compHtml = fixture.debugElement.nativeElement;
  });
  it('should create the app', async(() => {
    expect(compHtml).toBeTruthy();
  }));
  it('should have a heading saying Mieow', async(() => {
    expect(compHtml.querySelector('h2').textContent).toContain('Cats. Mieow !');
  }));
  it('should render a cat-gender component for Males', async(() => {
    expect(compHtml.querySelector('cat-gender.male').childElementCount).toBe(0);
  }));
  it('should render a cat-gender component for Females', async(() => {
    expect(compHtml.querySelector('cat-gender.female').childElementCount).toBe(0);
  }));
  it('should render a sort button', async(() => {
    expect(compHtml.querySelector('sort-button')).toBeTruthy();
  }));
});
