import { AuthClientPage } from './app.po';

describe('auth-client App', () => {
  let page: AuthClientPage;

  beforeEach(() => {
    page = new AuthClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
