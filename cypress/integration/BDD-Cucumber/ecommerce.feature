Feature: End to end E-commerce validation
  application Regression

Scenario: E-commerce products delivery
  Given I open E-commerce page
  When I add items to cart
  And Validate the total prices
  Then Select the country, submit and verify Thank you message