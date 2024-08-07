/**
 * @description               Type value into an CKEditor element
 * @param {string} selector   CSS selector for input
 * @param {string} value      Value to type
 * @return void               false
 */
Cypress.Commands.add('ckeditor_type', (selector, value) => {
    cy.window()
       .then( item => item.CKEDITOR.instances[ selector ].setData( value ) );
});
