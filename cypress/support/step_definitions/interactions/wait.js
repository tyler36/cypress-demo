import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('wait {int}', cy.wait)
Then('{int}待つ', cy.wait)
