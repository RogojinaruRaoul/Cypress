/// <reference types="Cypress" />
describe("MouseHover TestSuite", function () {
  it("Testcase-1", function () {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    // cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
