import { EPrintShopTemplatePage } from './app.po';

describe('EPrintShop App', function() {
  let page: EPrintShopTemplatePage;

  beforeEach(() => {
    page = new EPrintShopTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
