
Cypress.Commands.add('flightSearch', (from, to) => {
    cy.url()
        .should('equal', 'https://www.flightnetwork.com/');
    cy.get('[data-testid="cookieBanner-confirmButton"]')
        .click();    
    cy.get('[data-testid="searchForm-singleBound-origin-input"] > .css-171p1vm > .css-dyr6gj-container > .css-4g5dj > .css-1hwfws3')
        .type(from);        
    cy.get('#react-select-2-option-0')
        .click();            
    cy.contains('To')
        .type(to);
    cy.get('#react-select-3-option-0')
        .click();
    cy.get('[data-testid="searchForm-searchFlights-button"]')
        .click();
    cy.url()
        .should('include', '/result');
    cy.wait(4000);
});

Cypress.Commands.add('confirmDestinations', (from, to) => {
    cy.get('.css-2izuov > :nth-child(1)')
        .should('be.visible');

    cy.get('[data-testid="tripDetails-title-TitleText"] > :nth-child(1)')
        .should('contain', from)
    
    cy.get('[data-testid="tripDetails-title-TitleText"] > :nth-child(3)')
        .should('contain', to);
});