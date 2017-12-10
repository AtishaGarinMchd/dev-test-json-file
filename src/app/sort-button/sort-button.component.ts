import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css'],
})
export class SortButtonComponent implements OnInit {

  @Input()
  public text: string;

  @Output() 
  public onClick: EventEmitter<any> = new EventEmitter<any>();

  private wasClicked: boolean = false;
  
  constructor() { }

  ngOnInit() {

  }

  private btnClick(event: any) {
    this.wasClicked = true;
    this.onClick.emit(event);
  }
  
  private get clicked(): boolean {
    return this.wasClicked;
  }
  
}
