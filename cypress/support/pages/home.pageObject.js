import PageObject from '../PageObject';

class HomePageObject extends PageObject {
  url = '/#/';

  get usernameLink() {
    return cy.getByDataCy('username-link');
  }

  assertHeaderContainUsername = (username) => {
    cy.get('[data-cy="username-link"]').should('contain', username);
  };

  clickNewArticle() {
    cy.get('a.nav-link').contains('New Article').click();
  }

  clickSettings() {
    cy.get('a.nav-link').contains('Settings').click();
  }
}

export default HomePageObject;
