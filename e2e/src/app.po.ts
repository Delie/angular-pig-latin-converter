import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSiteHeaderText() {
    return element(by.css('app-header a')).getText();
  }

  getHeadingText() {
    return element(by.css('h1')).getText();
  }

}
