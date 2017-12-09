import { Directive, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[sortObservable]',
})
export class SortObservableDirective {

  @Input()
  public femaleCats: object[];

  @Input()
  public maleCats: object[];

  @Input()
  public cats: object[];

  constructor() { }

  @HostListener('click', ['$event']) 
  onClick(e) {
    this.sortFunction();
  }

  private sortFunction() {

  }
}
