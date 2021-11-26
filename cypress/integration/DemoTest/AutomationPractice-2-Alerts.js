/// <reference types="Cypress" />

describe("My TestSuite-3", function () {
  it("TestCase-1", function () {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    cy.get("#alertbtn").click();

    //Cypress auto accepts alerts and pop-ups
    //window:alert- API
    cy.on("window:alert", (str) => {
      //mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.get("input[value='Confirm']").click();

    //window:confirm- API
    cy.on("window:confirm", (confirm) => {
      expect(confirm).to.equal("Hello , Are you sure you want to confirm?");
    });

    cy.get("#opentab").invoke("removeAttr", "target").click();

    //  navigation back/forward, previous/next.
    cy.url().should("include", "rahulshettyacademy.com");
    cy.go("back");
    cy.url().should("include", "rahulshettyacademy.com/AutomationPractice/");
    cy.go("forward");
    cy.url().should("include", "rahulshettyacademy.com");
    cy.go("back");
    cy.url().should("include", "rahulshettyacademy.com/AutomationPractice/");
  });
});
