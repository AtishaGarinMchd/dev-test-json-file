import { Component } from '@angular/core';
import { CatsService } from './cats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public cats: object[];
  public maleCats: object[]
  public femaleCats: object[]
  private error: string = null;

  constructor(private catsService: CatsService) {}

  ngOnInit() 
  {
    this.catsService.getCats().subscribe(data => {
      this.cats = data;
    }, err => {
        this.error = "Sorry, something wrong happened retrieving my Precious data :( \r\n Please reload the page. ";
    });
  }

}
