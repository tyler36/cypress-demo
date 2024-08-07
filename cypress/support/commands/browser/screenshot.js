/**
 * @description     Assert "selector" element matches image screenshot
 * @param {string} selector
 */
let matchElement = ( selector ) => cy.get( selector ).matchImageSnapshot();

/**
 * @description     Assert "selector" element matches "named" image screenshot
 * @param {string} selector
 */
let matchElementNamed = ( selector, name ) => cy.get( selector ).matchImageSnapshot( name );

/**
 * @description Assert page matches screenshot
 */
let matchPage = () => cy.matchImageSnapshot();


Cypress.Commands.add( 'matchElement', matchElement );
Cypress.Commands.add( 'matchElementNamed', matchElementNamed );
Cypress.Commands.add( 'matchPage', matchPage );
