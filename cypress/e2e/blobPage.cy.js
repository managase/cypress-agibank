// cypress/e2e/blogPage.cy.js

const BlogPage = require('../support/page_objects/blogPage');

describe('Agibank Test', () => {

    beforeEach(() => {
        BlogPage.visit();
    });

    it('should search according to the specified search term', () => {
      cy.fixture('testData.json').each((testdata) => {
        cy.log(testdata)
        BlogPage.search(testdata.search);
        cy.get('#search-field').should('have.value', testdata.search);
        cy.contains('h1.page-title.ast-archive-title', testdata.search).should('exist');
        cy.get('div.post-content.ast-width-md-6').first().click();
        cy.contains('#content', testdata.search)
        cy.get('#search-field').clear( {force: true} )
      });
    });

    it('should display a message informing that no results were returned for the provided search term', () => {
      cy.fixture('testDataNegative.json').each((testdata) => {
        BlogPage.search(testdata.search);
        cy.get('.no-results').should(($element) => {
          const text = $element.text();
          expect(text).to.include("Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.");
        });
       });
    });
});