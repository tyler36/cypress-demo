# cypress/e2e/duckduckgo.feature
Feature: duckduckgo.com
  Scenario: visiting the frontpage
    When I visit "start.duckduckgo.com"
    Then I should see a search bar
