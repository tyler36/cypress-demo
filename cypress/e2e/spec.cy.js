describe('simple test', () => {
  it('can read the site', () => {
    cy.visit('/')
    cy.contains('Hello world')
  })
})
