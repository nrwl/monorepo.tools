import * as Page from '../support/app.po';

describe('website', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    Page.getWebsiteSlogan().contains(
      'Everything you need to know about monorepos, and the tools to build them'
    );
  });

  it('should have "Understanding monorepo" section', () =>
    Page.getUnderstandingMonorepoSection().should('be.visible'));
  it('should have "What is a monorepo" section', () =>
    Page.getWhatIsAMonorepoSection().should('be.visible'));
  it('should have "Why a monorepo" section', () =>
    Page.getWhyAMonorepoSection().should('be.visible'));
  it('should have "Monorepo features" section', () =>
    Page.getMonorepoFeaturesSection().should('be.visible'));
  it('should have "Monorepo tools" section', () =>
    Page.getMonorepoToolsSection().should('be.visible'));
  it('should have "Perception shift" section', () =>
    Page.getPerceptionShiftSection().should('be.visible'));
  it('should have "Tools review" section', () =>
    Page.getToolsReviewSection().should('be.visible'));
  it('should have "Monorepo resources" section', () =>
    Page.getMonorepoResourcesSection().should('be.visible'));
});
