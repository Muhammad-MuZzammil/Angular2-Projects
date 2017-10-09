import { ClassifiedAppUsingCliPage } from './app.po';

describe('classified-app-using-cli App', function() {
  let page: ClassifiedAppUsingCliPage;

  beforeEach(() => {
    page = new ClassifiedAppUsingCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
