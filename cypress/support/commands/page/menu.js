/**
 * @description     Toggle open the 'hamburger' menu if present
 * @return {object} Cypress $chainer
 */
Cypress.Commands.add('checkMenuIsVisible', () => {
    return cy.get('body').then($body => {
        cy.get('.mobile-nav-button').then( $mobileButton => {
            if ($mobileButton.is(':visible')){
                $mobileButton.click();
            };
        });
    });
});
