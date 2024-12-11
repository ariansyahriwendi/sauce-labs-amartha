@add_item_to_cart
Feature: Add item to cart

        @add_item_to_cart_sauce_labs_backpack
        Scenario: Add item to cart sauce labs backpack

            Given User on the login page
             When User login with "standard_user" and "secret_sauce"
              And User click login
             Then User should see the dashboard page

             When User click add to cart "sauce labs backpack"
             Then User should see the cart is added badge number 1

             When User click cart
             Then User should see an item is added to cart "sauce labs backpack"

        Examples:
                  | username      | password     |
                  | standard_user | secret_sauce |