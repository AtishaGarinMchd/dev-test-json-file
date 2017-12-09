import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Observable } from 'rxJs';
import Person from '../typings/Person';

@Directive({
  selector: '[sortObservable]',
})
export class SortObservableDirective {

  @Output() 
  public fCatsChange:EventEmitter<object[]> = new EventEmitter<object[]>();
  @Input()
  public fCats: object[];

  @Output() 
  public mCatsChange:EventEmitter<object[]> = new EventEmitter<object[]>();
  @Input()
  public mCats: object[];

  @Input()
  public persons: Observable<Person[]>;

  constructor() { }

  @HostListener('click', ['$event']) 
  onClick(e) {
    this.mCats  = [];
    this.fCats  = [];
  
    this.mCatsChange.emit(this.mCats);
    this.fCatsChange.emit(this.fCats);
    setTimeout( () => 
    {
      this.sortFunction();    
    }, 800)
  
  }

  private sortFunction() {
    let cats;

    //this.catsgroupBy( person => person.gender)
      


    this.mCats  =  cats['Male'];
    this.fCats  = cats['Female']

    this.mCatsChange.emit(this.mCats);
    this.fCatsChange.emit(this.fCats);

  }


}
