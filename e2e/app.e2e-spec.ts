import { AppPage } from './app.po';
import { browser } from 'protractor';
import { WriteStream, createWriteStream } from 'fs'

describe('cats-app App', () => {
  let page: AppPage;

  let writeScreenShot = (data:any, filename:string) => {
    var stream = createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display all cats from AGL server', () => {
    page.navigateTo();
    page.sortWithUnderscore().then(() => {
      expect(page.geth2()).toContain('Cats. Mieow !');
      expect(page.getMaleOwnedCatName(1)).toContain('Garfield');
      expect(page.getMaleOwnedCatName(2)).toContain('Jim');
      expect(page.getMaleOwnedCatName(3)).toContain('Max');
      expect(page.getMaleOwnedCatName(4)).toContain('Tom');
      expect(page.getFemaleOwnedCatName(1)).toContain('Garfield');
      expect(page.getFemaleOwnedCatName(2)).toContain('Simba');
      expect(page.getFemaleOwnedCatName(3)).toContain('Tabby');
    });
  
  

  });
});
