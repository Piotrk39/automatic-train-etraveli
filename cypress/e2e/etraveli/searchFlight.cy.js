/// <reference types='cypress'/>
import fixtures from "../../fixtures/fixtures.json";
import "../../pages/FlightSearch/FlightSearch";
import loginTestData from "../../fixtures/passengerData";

describe("Search for the flights and select options", () => {
  beforeEach(() => {
    cy.visit(fixtures.baseURL);
    cy.acceptCookies();
  });

  it("Types the destination of the flight and press SEARCH button", () => {
    cy.searchForTheFlight("Warsaw", "Athens");
    cy.verifySearchResultsBanner("Warsaw", "Athens");
    cy.fillInBooking(loginTestData.GR.email, loginTestData.GR.phone, loginTestData.PL.firstName, loginTestData.GR.lastName);
    cy.verifyBooking(loginTestData.GR.email, loginTestData.GR.phone, loginTestData.PL.firstName, loginTestData.GR.lastName);
  });

  it("Selects additional search options", () => {
    cy.searchForTheFlight("Warsaw", "Athens");
    cy.verifySearchResultsBanner("Warsaw", "Athens");
  });

});
