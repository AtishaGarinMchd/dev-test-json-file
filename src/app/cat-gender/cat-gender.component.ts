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

  private get backgroundColor() {
    return (this.gender === 'female' ? 'f4427d' : '4174f4');
  }

}
