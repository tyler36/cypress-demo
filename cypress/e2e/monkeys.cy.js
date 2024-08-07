describe('monkey test', () => {
  it('can search for monkeys', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type('monkeys')
    cy.get('button[type="submit"]').click()

    cy.contains('Arctic Monkeys')
  })
})
