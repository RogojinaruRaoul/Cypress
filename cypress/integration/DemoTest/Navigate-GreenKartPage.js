/// <reference types="Cypress" />

describe("My second TestSuite", function () {
  it("TestCase-1", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get(".search-keyword").type("ca");

    cy.wait(2000);

    cy.get(".products").as("products");

    cy.get("@products").find(".product").eq(1).contains("ADD TO CART").click();

    cy.get("@products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".cart-icon > img").click();

    cy.get("button[type='button']").contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
    // cy.get(":nth-child(14)").click();
  });
});
