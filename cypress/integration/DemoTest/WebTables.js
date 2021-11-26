/// <reference types="Cypress" />

describe("My Table TestSuite", function () {
  it("TestCase-1", function () {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    cy.get(".table-display td:nth-child(2)").each(($el, index, $list) => {
      const columnCourse = $el.text();
      if (columnCourse.includes("Python")) {
        cy.get(".table-display td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
