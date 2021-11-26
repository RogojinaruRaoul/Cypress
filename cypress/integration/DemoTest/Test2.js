describe("My TestSuite-3", function () {
  it("TestCase-1", function () {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked", true)
      .and("have.value", "option1");

    //Check boxes
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").check(["option2", "option3"]);
    // cy.contains("#checkbox-example").each(($el, index, $list) => {
    //   cy.contains("#checkBoxOption").check();
    // });

    // Static dropdowns
    cy.get("select#dropdown-class-example")
      .select("option3")
      .should("have.value", "option3");

    //Dynamic dropdowns
    // cy.get("#autocomplete").type("ind").contains("India");
  });
});
