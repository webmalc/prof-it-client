import { ProfItPage } from './app.po';

describe('prof-it App', () => {
  let page: ProfItPage;

  beforeEach(() => {
    page = new ProfItPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
