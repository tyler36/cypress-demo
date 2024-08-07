/**
 * @description             Click on an element "selector"
 * @param {string} selector element
 */
let clickSelector = selector => cy.get( selector ).click( {
    force: true
} );

/**
 * @description             Click on an the first element containing the "text"
 * @param {string} text     needle to find
 */
let clickText = ( text ) => cy.contains( text ).click( {
    force: true
} );

/**
 * @description             Click on an the first element containing the "text" within the "selector" element
 * @param {string} text     needle to find
   @param {string} selector haystack selector to search
 */
let clickTextIn = ( text, selector ) => cy.get( selector ).within( () => clickText( text ) );

/**
 * @description             Select checkbox/radio element by "selector"
 * @param {string} selector element
 */
let checkSelector = selector => cy.get( selector ).check( {
    force: true
} );


/**
 * @description             Select an option in a select "name"
 * @param {string} value    'value' to select
 * @param {string} selector element
 */
let selectOption = (value, selector) => {
    if (selector.match(/^[0-9a-z_]+$/)) {
        selector = `[name="${selector}"]`;
    }

    cy.get( selector ).select(value, {
        force: true
    });
}


/**
 * @description             Alias to sumbit a form by clicking on a "selector"
 * @param {string} selector Submit button selector
 */
let submit = ( selector = '#edit-submit' ) => clickSelector( selector );


/**
 * @description           Short cut to click on local taks and confirm. EG.'delete'
 * @param {string} label  Value displyed
 */
let clickAndConfirm = label => {
    cy.clickTextIn( label, ".block--iqnet-local-tasks" );
    cy.clickSelector( `input[value='${label}']` );
}

Cypress.Commands.add( 'clickSelector', clickSelector );
Cypress.Commands.add( 'clickText', clickText );
Cypress.Commands.add( 'clickTextIn', clickTextIn );
Cypress.Commands.add( 'checkSelector', checkSelector );
Cypress.Commands.add( 'selectOption', selectOption );
Cypress.Commands.add( 'clickAndConfirm', clickAndConfirm );
Cypress.Commands.overwrite('submit', submit)
