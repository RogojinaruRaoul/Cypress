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

    // Static dropdowns
    cy.get("select#dropdown-class-example")
      .select("option3")
      .should("have.value", "option3");

    //Dynamic dropdowns
    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });
    //autocomplete
    cy.get("#autocomplete").should("have.value", "India");

    //visible-not.visible
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should(
      "be.hidden"
    ) /*or .should("not.be.visible");*/;

    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
    cy.get("#displayed-text").type("muhahahahahaha");

    //check radio
    cy.get("input[name='radioButton']")
      .check(["radio1", "radio3"])
      .should("be.checked") /*-only one radio button can be selected*/;
  });
});
