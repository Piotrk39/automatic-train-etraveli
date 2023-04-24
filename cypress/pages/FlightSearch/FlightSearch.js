import { COUNTRY_PREFIX, EMAIL_INPUT, FIRST_RESULT_STANDARD, FROM_INPUT, GENDER_MALE, LAST_NAME_INPUT, NAME_INPUT, PHONE_INPUT, SEARCH_FLIGHTS_BUTTON, SEARCH_RESULTS_HEADER_DETAILS_FROM , SEARCH_RESULTS_HEADER_DETAILS_TO, SELECT_TO_OPTION_ONE, SELECT_TO_OPTION_TWO, TO_INPUT } from "./FlightSearchElms";

Cypress.Commands.add('searchForTheFlight', (from, to) => {
    cy.xpath(FROM_INPUT).type(from);
    cy.get(SELECT_TO_OPTION_ONE).click();
    cy.xpath(TO_INPUT).type(to);
    cy.get(SELECT_TO_OPTION_TWO).click();
    cy.xpath(SEARCH_FLIGHTS_BUTTON).scrollIntoView();
    cy.xpath(SEARCH_FLIGHTS_BUTTON).click();
});

Cypress.Commands.add('verifySearchResultsBanner', (from, to) => {
    console.log('This is a message printed to the terminal.' + to);
    cy.wait(6000)
        .xpath(SEARCH_RESULTS_HEADER_DETAILS_FROM).contains(from)
        .xpath(SEARCH_RESULTS_HEADER_DETAILS_TO).contains(to)
});

Cypress.Commands.add('fillInBooking', (email, phone, name, lastName) => {
    cy.wait(5000)
    cy.xpath(FIRST_RESULT_STANDARD).click()
    cy.get(EMAIL_INPUT).type(email);
    cy.get(PHONE_INPUT).type(phone);
    cy.get(GENDER_MALE).click( {force: true} );
    cy.get(NAME_INPUT).type(name);
    cy.get(LAST_NAME_INPUT).type(lastName);
});

Cypress.Commands.add('verifyBooking', (email, phone, name, lastName) => {
    cy.get(EMAIL_INPUT).should('have.value', email);
    cy.get(PHONE_INPUT).should('have.value', phone);
    cy.get(GENDER_MALE).should('be.checked');
    cy.get(NAME_INPUT).should('have.value', name);
    cy.get(LAST_NAME_INPUT).should('have.value', lastName);
});
