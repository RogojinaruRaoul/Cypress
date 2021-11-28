import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import Shop from "../../../support/PageObjects/Shop";
const shop = new Shop();

Given("I open E-commerce page",()=>
{cy.visit(Cypress.env("url") + "/angularpractice/")
shop.getShopTab().click();
});

When("I add items to cart",function(){
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