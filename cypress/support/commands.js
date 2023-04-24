import { ACCEPT_COOKIES } from "../pages/FlightSearch/FlightSearchElms";

Cypress.Commands.add('acceptCookies', () => {
    cy.xpath(ACCEPT_COOKIES).click();
});

Cypress.Commands.add('NavigateToURL', (url) => {
    cy.visit(url)
});