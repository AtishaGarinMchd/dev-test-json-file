import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css'],
})
export class SortButtonComponent implements OnInit {

  @Input()
  public text: string;
  
  constructor() { }

  ngOnInit() {
  }

}
