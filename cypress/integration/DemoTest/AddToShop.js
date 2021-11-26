/// <reference types="cypress"/>

import Shop from "../../support/PageObjects/Shop";
describe("My TestSuite", function () {
  before(function () {
    const shop = new Shop();
    cy.visit(Cypress.env("url") + "/angularpractice/");
    shop.getShopTab().click();

    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("My 1'st test", function () {
    // this.data.product;
    Cypress.config("pageLoadTimeout", 8000);
    const shop = new Shop();
    this.data.product.forEach(function (element) {
      cy.selectTel(element);
    });

    shop.getCheckOut().click();

    //How to check the total price of the products
    var sum = 0;
    cy.get("td:nth-child(4) strong")
      .each((el) => {
        //   split string by white space " "
        const splitRes = el.text().split(" ");

        //   delete spaces before and after the element of index 1
        var price = splitRes[1].trim();

        sum = Number(sum) + Number(price);
      })
      .then(function () {
        // we use .then because JS is asyncronous and we need to wait for the promise to be resolved
        cy.log(sum);
      });
    cy.get("h3:nth-child(1) strong").then(function (element) {
      var total = element.text().split(" ");
      var price = total[1].trim();

      expect(sum).to.equal(Number(price));
    });
    // cy.pause();
    shop.getCheckOut2().click();
    shop.getCountry().type("India");

    cy.get(".suggestions > ul > li > a").click();
    cy.get("#checkbox2").click({ force: true });
    cy.get("input[type='submit']").click();
    cy.get(".alert").then(function (el) {
      const element = el.text();

      expect(
        element.includes(
          "Success! Thank you! Your order will be delivered in next few weeks :-)."
        )
      ).to.be.true;
    });
    //   .each((el, index, list) => {
    //     if (el.text() === "India") {
    //       cy.wrap(el).click();
    //     }
    //   });
  });
});
