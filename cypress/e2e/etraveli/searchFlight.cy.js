/// <reference types='cypress'/>
import fixtures from "/Users/piotrkrajewski/Desktop/Recruitment (data)/etraveli/cypress/fixtures/fixtures.json";

describe('It reaches the page of etraveli', () => {
    const from = fixtures.from;
    const to = fixtures.to;
    const url = fixtures.url;
    const resetButton = '[data-testid="resultPage-PRICEFilter-content"] > .css-jve3en > .css-1v6s540 > .css-l901og > .slider-tracks > [data-testid="track-0"]';
    const egean = '#airlines-A3';
    const lufthansa = '#airlines-LH';

    beforeEach(() => {
      cy.visit(url)
    });

    it("Checks if the page redirected succesfully", () => {
        cy.url()
            .should('equal', url);
    });

    it("Types the destination of the flight and press SEARCH button", () =>{
        cy.flightSearch(from, to);
        cy.confirmDestinations(from, to);
    });

    it("Clicks on additional options and selects and de-selects them", () => {
        cy.flightSearch(from, to);
        cy.confirmDestinations(from, to);

        cy.get('.css-2izuov > :nth-child(1)')
            .should('be.visible');

        //Clicks additional settings and selects and de-selects them
        cy.get('.controls')
            .click();

        //Agean selection should not be checked
        cy.get(egean)
            .uncheck()
            .should('not.be.checked');

        //Lufthansa selection should not be checked
        cy.get(lufthansa)
            .uncheck()
            .should('not.be.checked');

        //All Arlines should be unchecked with clear all button
        cy.get('.css-1dag4e6 > :nth-child(1)')
            .click();
            
        cy.get(lufthansa)
            .should('not.be.checked');

        //All Airlines should be checked again with check all button
        cy.get('.css-1dag4e6 > :nth-child(2)')
            .click();

        cy.get(lufthansa)
            .should('be.checked');

        //Filter Reset button
        cy.get(resetButton)
            .click();

        cy.get('[data-testid="resultPage-filterHeader-PRICEFilterResetButton-button"] > .css-14yw853')
            .should('contain', 'Reset filter')
            .click();
        
        cy.get(resetButton)
            .should('not.contain', 'Reset filter');
        
        //Confirm Filters
        cy.get('[data-testid="filtersForm-applyFilters-button"]')
            .click();
    });
});