/// <reference types="Cypress" />

describe("My first test suite", function () {
  it("My fist test case", function () {
    cy.visit(Cypress.env("url") + "/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);
    //parent-child chain
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product.name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
  });
});
