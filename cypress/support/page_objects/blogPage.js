class BlogPage {
    elements = {
        searchBtn: () => cy.get('a.slide-search.astra-search-icon'),
        searchText: () => cy.get("#search-field")
    }

    visit() {
        cy.visit('/');
    }
    search(value) {
        this.elements.searchBtn().as('btnSearch')
        cy.get('@btnSearch').click();
        this.elements.searchText().as('txtSearch')
        cy.get('@txtSearch').type(value);
        this.elements.searchText().as('txtSearch')
        cy.get('@txtSearch').type('{enter}');
    }
}

module.exports = new BlogPage();