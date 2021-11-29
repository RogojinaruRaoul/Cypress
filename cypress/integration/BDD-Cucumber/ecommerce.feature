Feature: End to end E-commerce validation
  application Regression

@Regression
Scenario: E-commerce products delivery
  Given I open E-commerce page
  When I add items to cart
  And Validate the total prices
  Then Select the country, submit and verify Thank you message

@Smoke
  Scenario:  Filling the form to shop
    Given I open E-commerce page
    When I fill the form details
      |name  |gender|
      |Miruna|Female|
      |Raoul |Male  |
      |Mihaela|Female|
    And Validate the form's behavior
    Then Select the Shop page