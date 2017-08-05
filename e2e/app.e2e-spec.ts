import { PlayerManagerPage } from './app.po';

describe('player-manager App', () => {
  let page: PlayerManagerPage;

  beforeEach(() => {
    page = new PlayerManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
