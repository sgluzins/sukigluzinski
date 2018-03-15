import { SukigluzinskiPage } from './app.po';

describe('sukigluzinski App', function() {
  let page: SukigluzinskiPage;

  beforeEach(() => {
    page = new SukigluzinskiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
