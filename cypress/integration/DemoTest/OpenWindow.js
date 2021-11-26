/// <reference types="Cypress" />
describe("MouseHover TestSuite", function () {
  it("Testcase-1", function () {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    //   Get the value of an property
    cy.get("#opentab").then(function (el) {
      const url = el.prop("href");

      cy.visit(url);
    });
    // cy.get("#openwindow").invoke("removeAttr", "onclick").click();
  });
});
