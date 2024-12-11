@login
Feature: Login

        @login-standard-user
        Scenario: User can login with standard user

            Given User on the login page
             When User login with "standard_user" and "secret_sauce"
              And User click login
             Then User should see the dashboard page

        Examples:
                  | username      | password     |
                  | standard_user | secret_sauce |

        @login-locked-out-user
        Scenario: User can not login with locked out user

            Given User on the login page
             When User login with "locked_out_user" and "secret_sauce"
              And User click login
             Then User should see an error message "locked_out_user"

        Examples:
                  | username        | password     |
                  | locked_out_user | secret_sauce |

        @login-problem-user
        Scenario: User can login with problem user

            Given User on the login page
             When User login with "problem_user" and "secret_sauce"
              And User click login
             Then User should see the dashboard page

        Examples:
                  | username     | password     |
                  | problem_user | secret_sauce |

        @login-performance-glitch-user
        Scenario: User can login with performance glitch user

            Given User on the login page
             When User login with "performance_glitch_user" and "secret_sauce"
              And User click login
             Then User should see the dashboard page

        Examples:
                  | username                | password     |
                  | performance_glitch_user | secret_sauce |

        @login-error-user
        Scenario: User can login with error user

            Given User on the login page
             When User login with "error_user" and "secret_sauce"
              And User click login
             Then User should see the dashboard page

        Examples:
                  | username   | password     |
                  | error_user | secret_sauce |

        @login-visual-user
        Scenario: User can login with visual user

            Given User on the login page
             When User login with "visual_user" and "secret_sauce"
              And User click login
             Then User should see the dashboard page

        Examples:
                  | username    | password     |
                  | visual_user | secret_sauce |