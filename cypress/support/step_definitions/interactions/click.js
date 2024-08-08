import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('I click {string}', cy.clickSelector)
Then('{string}をクリックします', cy.clickSelector)

Then('I click the text {string}', cy.clickText)
Then('テキスト{string}をクリックします', cy.clickText)
Then('I click the text {string} in {string}', cy.clickTextIn)

Then('I check {string}', cy.checkSelector)
Then('I select {string} in {string}', cy.selectOption)

Then('I submit the form', cy.submit)
Then('フォームを送信します', cy.submit)
