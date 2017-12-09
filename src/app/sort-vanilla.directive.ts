import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[sortVanilla]'
})
export class SortVanillaDirective {

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
