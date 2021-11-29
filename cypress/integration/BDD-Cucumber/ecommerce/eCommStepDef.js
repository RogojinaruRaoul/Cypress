import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import Shop from "../../../support/PageObjects/Shop";
import HomePage from "../../../support/PageObjects/HomePage";
const shop = new Shop();
const homePage = new HomePage();
let name;
Given("I open E-commerce page",()=>
{cy.visit(Cypress.env("url") + "/angularpractice/")

});

When("I add items to cart",function(){
    shop.getShopTab().click();
    this.data.product.forEach(function (element) {
        cy.selectTel(element);
    });
    shop.getCheckOut().click();
});

And("Validate the total prices",()=>{
    var sum=0;
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

})

Then("Select the country, submit and verify Thank you message",()=>{
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

})

When("I fill the form details",function(dataTable){
    //Using fixtures
    // homePage.getNameBox().type(this.data.name);
    //
    // homePage.getGender().select(this.data.gender);
//    Using dataTable from .feature file
//    When you call rawTable[1]-> you will have an array of [Miruna, Female]
    name= dataTable.rawTable[1][0];
    homePage.getNameBox().type(name);
    homePage.getGender().select(dataTable.rawTable[1][1]);
})

And("Validate the form's behavior",function(){
    homePage.getTwoWayDataBinding().should("have.value",name);

    homePage.getNameBox().should("have.attr", "minlength", "2");

    homePage.getEnterpreneaurRadioButton().should("not.be.checked");
    homePage.getEnterpreneaurRadioButton().should("be.disabled");

})

Then("Select the Shop page",()=>{
    homePage.getShopTab().click();
})