import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I scroll {int} px', cy.scrollDistance)
Given('{int}ピクセルスクロールします', cy.scrollDistance)
Given('I scroll to the {string} of {string}', cy.scrollToSelectorPosition)
Given('{string}の{string}までスクロールします', cy.scrollToSelectorPosition)
