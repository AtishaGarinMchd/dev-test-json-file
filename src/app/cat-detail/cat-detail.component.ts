import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {

  @Input()
  public cat: object[]

  constructor() { }

  ngOnInit() {
  }

}
