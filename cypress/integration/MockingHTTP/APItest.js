describe("My API test",function () {
    it("API test 1",function () {

        cy.request("POST","http://216.10.245.166/Library/Addbook.php",
            {
                "name":"Learn Appium Automation with JAVA",
                "isbn":"bcdsss",
                "aisle":"22s7",
                "author":"John Doe"

        }).then(function(response)
        {
            expect(response.body).to.have.property("Msg","successfully added");
            expect(response.status).to.eq(200);
        })

    })
})