import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatGenderComponent } from './cat-gender/cat-gender.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { SortUnderscoreDirective } from './sort-underscore.directive';
import { SortButtonComponent } from './sort-button/sort-button.component';

import { PersonsService } from './persons.service';

@NgModule({
  declarations: [
    AppComponent,
    CatGenderComponent,
    CatDetailComponent,
    SortUnderscoreDirective,
    SortButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PersonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
