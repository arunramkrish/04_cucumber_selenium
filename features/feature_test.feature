Feature: A feature to validate certain actions on visiting the Selenium Dev website
    Scenario: On visiting the homepage of selenium.dev
        Given I have visited the Selenium official web page on "www.selenium.dev"
        When There is a title on the page as "SeleniumHQ Browser Automation"
        Then I should be able to click Search in the sidebar
