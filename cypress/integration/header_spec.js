describe('Verifica se existe header e se há os componentes esperado', () => {
  it('Se header esta na tela', () => {
    cy.visit('http://localhost:3000/');
    cy.get('header').should('be.visible');
    cy.get('header').should('have.css', 'position', 'absolute');
  });
  it('Verifica se existe o gif', () => {
    cy.get('.header__gif').should('be.visible');
  });
});
