import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the page header', () => {
    page.navigateTo();
    expect(page.getSiteHeaderText()).toEqual('Pig Latin Converter');
  });

  it('should contain a H1 tag with content', () => {
    page.navigateTo();
    expect(page.getHeadingText()).not.toBe('');
  });
});
