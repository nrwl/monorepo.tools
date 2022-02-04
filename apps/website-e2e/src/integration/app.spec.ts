import { getWebsiteSlogan } from '../support/app.po';

describe('website', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getWebsiteSlogan().contains(
      'Everything you need to know about monorepos, and the tools to build them'
    );
  });
});
