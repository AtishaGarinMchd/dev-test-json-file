import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { _ } from 'underscore';

@Directive({
  selector: '[sortUnderscore]'
})
export class SortUnderscoreDirective  {

  @Output() 
  public mCatsChange:EventEmitter<object[]> = new EventEmitter<object[]>();
  @Input()
  public mCats: object[];

  @Output() 
  public fCatsChange:EventEmitter<object[]> = new EventEmitter<object[]>();
  @Input()
  public fCats: object[];

  @Input()
  public persons: object[];

  @HostListener('click', ['$event']) 
  onClick(e) {
    this.sortFunction();
  }
  
  private sortFunction() {
    
    let genders = _.groupBy(this.persons, person => person.gender);

    let cats = _.mapObject(genders, (gender, index) => {
      let pets = _.pluck(gender, 'pets');
      pets = _.flatten(_.map(pets, _.values)) 
      pets = _.filter(pets, pet => pet.type === 'Cat');
      pets = _.sortBy(pets, 'name');
      return pets;
    });

    this.mCats  =  cats['Male'];
    this.fCats  = cats['Female']

    this.mCatsChange.emit(this.mCats);
    this.fCatsChange.emit(this.fCats);
      
  }

}
