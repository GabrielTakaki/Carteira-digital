describe('Verifica se há os componentes esperados na tela', () => {
  it('Se formulário para preencher valor e moeda está presente', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.form').should('exist');
    cy.get('.form__label').should('exist');
    cy.get('.form__paragraph').should('be.visible');
    cy.get('.form__input').should('be.visible').should('have.value', 0);

    cy.get('.form__paragraph-select').should('be.visible');
    cy.get('.form__select').should('be.visible').should('have.value', '');
    cy.get('.form__option').should('be.visible');

    cy.get('.form__button').should('be.visible').should('have.text', 'Converter');
  });

});
describe('Verifica se ao inserir valores de conversão, é retornado o esperado', () => {
  it('Se após a requisição, mostra o componentes na tela', () => {
    cy.visit('http://localhost:3000/');
  
    cy.get('.form__input').type('100');
    cy.get('.form__select').select('USD');
    cy.get('.form__button').click();
  
    cy.get('.card').should('exist');
    cy.get('.card__section').should('exist');
    cy.get('.card__header-from').should('be.visible');
    cy.get('.card__header-to').should('be.visible');
    cy.get('.card__header-date').should('be.visible');
  });

  it('Se retorna mensagem de erro ao não preencher os campos de forma esperado', () => {
    cy.get('.form__input').type('100');
    cy.get('.form__select').select('');
    cy.get('.form__button').click();
  })
});