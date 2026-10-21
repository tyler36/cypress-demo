import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I visit duckduckgo.com', () => {
  cy.visit('https://start.duckduckgo.com/')
})

Then('I should see a search bar', () => {
  cy.get('textarea[name="q"]').should(
    'have.attr',
    'aria-label',
    'Search with DuckDuckGo',
  )
})
