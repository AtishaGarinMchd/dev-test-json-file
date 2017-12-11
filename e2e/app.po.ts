import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  geth2() {
    return element(by.css('h2')).getText();
  }

  getMaleOwnedCatName(index: number) {
    return element(by.css('cat-gender.male div ul li:nth-child('+index+') cat-detail')).getText();
  }

  getFemaleOwnedCatName(index: number) {
    return element(by.css('cat-gender.female div ul li:nth-child('+index+') cat-detail')).getText();
  }

  sortWithUnderscore() {
    return element(by.css('app-root sort-button button')).click();
  }


}
