/// <reference types="Cypress" />

describe("Mocking HTTP request ",function () {
    it("Test 1",function () {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        //cy.intercept(method,url,routeHandler)

        cy.intercept("GET","https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
            (request)=>
            {
                request.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=raoul";

                request.continue((response)=>
                {
                    // expect(response.statusCode).to.equal(403);
                });
            }).as("dummyURL");

        cy.get("button[routerlink='/library']").click();
        cy.wait("@dummyURL");
    })

})