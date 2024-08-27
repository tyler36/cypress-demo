import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('I type {string} into {string}', cy.typeStringInto)
Then('{string}に{string}と入力します', (name, query) =>
  cy.typeStringInto(query, name),
)

Then('I cktype {string} into {string}', cy.typeStringIntoCkeditor)
Then('{string}エディターに{string}と入力します', (name, query) =>
  cy.typeStringIntoCkeditor(query, name),
)
