// cypress/e2e/signup.cy.js

const BlogPage = require('../support/page_objects/blogPage');

describe('Agibank Test', () => {

    beforeEach(() => {
        BlogPage.visit();
    });

    it('should search a random string', () => {
      BlogPage.search("teste");
    });
  })