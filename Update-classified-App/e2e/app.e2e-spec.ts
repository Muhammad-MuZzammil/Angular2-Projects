import { UpdateClassifiedAppPage } from './app.po';

describe('update-classified-app App', () => {
  let page: UpdateClassifiedAppPage;

  beforeEach(() => {
    page = new UpdateClassifiedAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
