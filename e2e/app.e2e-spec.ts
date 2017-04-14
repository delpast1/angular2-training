import { SinglePagePage } from './app.po';

describe('single-page App', function() {
  let page: SinglePagePage;

  beforeEach(() => {
    page = new SinglePagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
