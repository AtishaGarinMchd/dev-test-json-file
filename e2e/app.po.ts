import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getMaleList() {
    return element(by.css('app-root h1')).getText();
  }

  getFemaleList() {
    return element(by.css('app-root h1')).getText();
  }

  sortWithUnderscore() {
    return element(by.css('app-root h1')).getText();
  }


}
