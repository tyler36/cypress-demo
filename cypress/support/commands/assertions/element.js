import {
    message
} from '../../../fixtures/selectors.json';

/**
 * @description             Assert "selector" exists on page
 * @param {string} selector CSS selector
 */
let selectorExist = selector => cy.get( selector ).should( 'exist' );

/**
 * @description             Assert "selector" does NOT exist on page
 * @param {string} selector CSS selector
 */
let selectorNotExist = selector => cy.get( selector ).should( 'not.exist' );

/**
 * @description Assert "selector" contains "text"
 * @param {string} text
 * @param {string} selector
 */
let selectorContainsString = ( text, selector ) => cy.get( selector ).should( 'contain', text );

/**
 * @description Assert "selector" does NOT contain "text"
 * @param {string} text
 * @param {string} selector
 */
let selectorNotContainsString = ( text, selector ) => cy.get( selector ).should( 'not.contain', text );


/**
 * @description Selector should have value set
 * @param {string} selector
 * @param {string} expected value
 */
let selectorContainsValue = (selector, value) => cy.get(selector).should('have.value', value);

/**
 * @description Selector should NOT have value set. Opposite of "selectorContainsValue"
 * @param {string} selector
 * @param {string} expected value
 */
let selectorNotContainsValue = (selector, value) => cy.get(selector).should('not.have.value', value);

/**
 * @description     Assert "selector" is visible on page
 * @param {string} selector
 */
let selectorVisible = selector => cy.get( selector ).then( $el => assert.isTrue( Cypress.dom.isVisible( $el ) ) );

/**
 * @description     Assert "selector" is NOT visible on page
 * @param {string} selector
 */
let selectorHidden = selector => cy.get( selector ).then( $el => assert.isTrue( Cypress.dom.isHidden( $el ) ) );

/**
 * @description         Assert link to "path" exists
 * @param {string} uri  URL
 */
let linkExist = uri => cy.get( `a[href$="${uri}"]` ).should( 'exist' );

/**
 * @description         Assert link to "path" deos NOT exist
 * @param {string} uri URL
 */
let linkNotExist = uri => cy.get( `a[href$="${uri}"]` ).should( 'not.exist' );

/**
 * @description Assert page title contains text
 * @param {string} text
 */
let titleContains = text => cy.title().should( 'include', text );

/**
 * @description Assert page description is set to "text"
 * @param {string} text
 */
let metaDescription = text => metaName( 'description', text );

/**
 * @description         Assert "name" metatag with has content set to "text"
 * @param {string} name attribute
 * @param {string} text
 */
let metaName = ( name, text ) => cy.get( `meta[name="${name}"]` ).should( 'have.attr', 'content', text );

/**
 * @description             Assert "property" metatag with has content set to "text"
 * @param {string} property attribute
 * @param {string} text
 */
let metaProp = ( property, text ) => cy.get( `meta[property="${property}"]` ).should( 'have.attr', 'content', text );

/**
 * @description Assert script element with "scriptSrc" exists
 * @param {string} scriptSrc
 */
let scriptExist = scriptSrc => selectorExist( `script[src="${scriptSrc}"]` );

/**
 * @description     "Error" seletcor does NOT exist on page. Alias
 */
let notSeeErrors = () => selectorNotExist( message.error );

Cypress.Commands.add( 'selectorExist', selectorExist );
Cypress.Commands.add( 'selectorNotExist', selectorNotExist );
Cypress.Commands.add( 'selectorContainsString', selectorContainsString );
Cypress.Commands.add( 'selectorNotContainsString', selectorNotContainsString );
Cypress.Commands.add( 'selectorContainsValue', selectorContainsValue );
Cypress.Commands.add( 'selectorNotContainsValue', selectorNotContainsValue );
Cypress.Commands.add( 'selectorVisible', selectorVisible );
Cypress.Commands.add( 'selectorHidden', selectorHidden );
Cypress.Commands.add( 'linkExist', linkExist );
Cypress.Commands.add( 'linkNotExist', linkNotExist );
Cypress.Commands.add( 'titleContains', titleContains );
Cypress.Commands.add( 'metaDescription', metaDescription );
Cypress.Commands.add( 'metaName', metaName );
Cypress.Commands.add( 'metaProp', metaProp );
Cypress.Commands.add( 'scriptExist', scriptExist );
Cypress.Commands.add( 'notSeeErrors', notSeeErrors );
