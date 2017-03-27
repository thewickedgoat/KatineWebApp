import { KantineExamWebappPage } from './app.po';

describe('kantine-exam-webapp App', () => {
  let page: KantineExamWebappPage;

  beforeEach(() => {
    page = new KantineExamWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
