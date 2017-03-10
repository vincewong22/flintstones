import { Ng2FlintstonesPage } from './app.po';

describe('ng2-flintstones App', function() {
  let page: Ng2FlintstonesPage;

  beforeEach(() => {
    page = new Ng2FlintstonesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
