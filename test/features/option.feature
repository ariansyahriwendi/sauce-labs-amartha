@option
Feature: Option

        @option-about
        Scenario: Option about

            Given User on the login page
             When User login with "standard_user" and "secret_sauce"
              And User click login
             Then User should see the dashboard page

             When User click option
              And User click about
             Then User should see the about page

        Examples:
                  | username      | password     |
                  | standard_user | secret_sauce |