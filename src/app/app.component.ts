import { Component } from '@angular/core';
import { PersonsService } from './persons.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {
  
  public persons: object[];
  public getPersons: Observable<Object[]>;

  public maleCats: object[]
  public femaleCats: object[]
  private error: string = null;

  constructor(private personsService: PersonsService) {}

  ngOnInit() 
  {
    this.personsService.getPersons().subscribe(data => {
      this.persons = data;
    }, err => {
        this.error = "Sorry, something wrong happened retrieving my Precious data :( \r\n Please reload the page. ";
    });
    
    this.getPersons = this.personsService.getPersons();
  }

}
