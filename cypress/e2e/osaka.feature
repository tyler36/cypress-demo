Feature: Osaka Search
  Scenario: Search for monkeys
    Given I visit 'https://duckduckgo.com'
    When I type 'Osaka' into 'q'
    And I click 'button[type="submit"]'
    Then I should see '大阪'
