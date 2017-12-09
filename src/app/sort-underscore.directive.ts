import { Directive, EventEmitter, HostListener, Input } from '@angular/core';
import { _ } from 'underscore';

@Directive({
  selector: '[sortUnderscore]'
})
export class SortUnderscoreDirective  {

  @Input()
  public femaleCats: object[];

  @Input()
  public maleCats: object[];

  @Input()
  public cats: object[];

  @HostListener('click', ['$event']) 
  onClick(e) {
    this.sortFunction();
  }
  
  private sortFunction() {
    let cats;
    cats = _.filter(this.cats, obj => { return obj.cats !== null })
    cats = _.map(cats, obj => { return obj.cats });
//    cats = _.invoke()
  }

}
