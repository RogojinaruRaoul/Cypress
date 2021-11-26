/// <reference types="Cypress" />

describe("My first TestSuite", function () {
  it("My first TestCase", function () {
    //All test steps are written here
    // expect(true).to.equal(false);
  });

  it("My second TestCase", function () {
    //Write test steps
    cy.visit(Cypress.env("url") + "/seleniumPractise/#/");

    cy.get(".search-keyword").type("ca");

    //When we don’t have any load animations we shoud use the cy.wait(ms) method.
    cy.wait(2000);

    //In selenium get is used for reaching a URL in the browser.
    //In Cypress get acts like find element.
    //should is an assertion-> the number of elements with class=product should be 4.
    cy.get(".product:visible").should("have.length", 4);

    //create a variable using "as"
    cy.get(".products").as("products");
    //Parent- Child chaining
    cy.get("@products").find(".product").should("have.length", 4);

    cy.get("@products")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click()
      .then(() => {
        console.log("JavaScript method");
      });
    // cy.get(".products")
    //   .find(".product")
    //   .contains("Cashews")
    //   .get(":nth-child(4) > .product-action > button")
    //   .click();

    //.each is a method used to iterate trough a list and search for a element
    cy.get("@products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    //assert if logo text is correctly displayed
    cy.get(".brand.greenLogo").should("have.text", "GREENKART");

    //this is to create a variable and print in logs
    cy.get(".brand.greenLogo").then(function (logoelement) {
      cy.log(logoelement.text());
    });

    cy.get(".cart-icon > img").click();
    // cy.get(".action-block").find(":nth-child(14)").click();
    // cy.get(":nth-child(14)");
  });
});
