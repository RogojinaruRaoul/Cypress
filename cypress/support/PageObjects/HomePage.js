class HomePage {
  getNameBox() {
    return cy.get("input[name='name']:nth-child(2)");
  }
  getGender() {
    return cy.get("#exampleFormControlSelect1");
  }

  getTwoWayDataBinding() {
    return cy.get("input[name='name']:nth-child(1)");
  }
  getEnterpreneaurRadioButton() {
    return cy.get("#inlineRadio3");
  }

  getShopTab() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}
//To make the class available to be accessed
export default HomePage;
