import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cat-gender',
  templateUrl: './cat-gender.component.html',
  styleUrls: ['./cat-gender.component.css']
 })
export class CatGenderComponent implements OnInit {

  constructor() { }
  
  @Input()
  public gender: string;
  @Input()
  public cats: object[];
  
  ngOnInit() {
  }

}
