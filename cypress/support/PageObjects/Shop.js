class Shop {
  getShopTab() {
    return cy.get(":nth-child(2) > .nav-link");
  }

  getCheckOut() {
    return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link");
  }
  getCheckOut2() {
    return cy.get("button[class='btn btn-success']");
  }
  getCountry() {
    return cy.get("#country");
  }
}
export default Shop;
