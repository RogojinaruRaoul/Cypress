/// <reference types="Cypress" />

import HomePage from "../../support/PageObjects/HomePage";

describe("My TestSuite", function () {
  before(function () {
    cy.visit(Cypress.env("url") + "/angularpractice/");

    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("My 1'st test", function () {
    const homePage = new HomePage();

    homePage.getNameBox().type(this.data.name);

    homePage.getGender().select(this.data.gender);

    homePage.getTwoWayDataBinding().should("have.value", this.data.name);

    homePage.getNameBox().should("have.attr", "minlength", "2");

    homePage.getEnterpreneaurRadioButton().should("not.be.checked");
    homePage.getEnterpreneaurRadioButton().should("be.disabled");

    homePage.getShopTab().click();
  });

});
