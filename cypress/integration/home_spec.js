describe('Verifica se há os componentes esperados na tela', () => {
  it('Se formulário para preencher valor e moeda está presente', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.form').should('exist');
    cy.get('.form__label').should('exist');
    cy.get('.form__paragraph').should('be.visible');
    cy.get('.form__input').should('be.visible').should('have.value', '');

    cy.get('.form__paragraph-select').should('be.visible');
    cy.get('.form__select').should('be.visible').should('have.value', '');
    cy.get('.form__option').should('be.visible');

    cy.get('.form__button').should('be.visible').should('have.text', 'Converter');
  });

});
describe('Verifica se ao inserir valores de conversão, é retornado o esperado', () => {
  it('Se após a requisição, mostra o componentes na tela', () => {
    const today = new Date();
    cy.visit('http://localhost:3000/');
  
    cy.get('.form__input').type('100');
    cy.get('.form__select').select('USD');
    cy.get('.form__button').click();
  
    cy.get('.card').should('exist');
    cy.get('.card__section').should('exist');
    cy.get('.card__header-from').should('be.visible');
    cy.get('.card__header-to').should('be.visible');
    cy.get('.card__header-date').should('be.visible');
    cy.get('.card__header-date').contains(`Data de consulta: ${ today.toLocaleDateString() } ${ today.getHours() }:${ today.getMinutes() }`);
  });

  it('Se retorna mensagem de erro ao não preencher os campos de forma esperado', () => {
    cy.get('.form__input').type('100');
    cy.get('.form__select').select('');
    cy.get('.form__button').click();

    cy.get('.error').should('be.visible');
  });

  it('Se o valor quando em dólares convertido é o esperado em BRL e EUR', () => {
    cy.get('.form__input').clear();
    cy.get('.form__input').type('1');
    cy.get('.form__select').select('USD');
    cy.get('.form__button').click();

    cy.get('.card__header-from').contains('1 Dólares americanos =');
    cy.get('#to-one').contains('0.88 Euros');
    cy.get('#to-two').contains('5.53 Reais brasileiro');
  });

  it('Se o valor quando em euros convertido é o esperado em BRL e USD', () => {
    cy.get('.form__input').clear();
    cy.get('.form__input').type('1');
    cy.get('.form__select').select('EUR');
    cy.get('.form__button').click();

    cy.get('.card__header-from').contains('1 Euros =');
    cy.get('#to-one').contains('6.28 Reais brasileiro');
    cy.get('#to-two').contains('1.13 Dólares americanos');
  });

  it('Se o valor quando em reais convertido é o esperado em BRL e USD', () => {
    cy.get('.form__input').clear();
    cy.get('.form__input').type('100');
    cy.get('.form__select').select('BRL');
    cy.get('.form__button').click();

    cy.get('.card__header-from').contains('100 Reais brasileiro =');
    cy.get('#to-one').contains('15.93 Euros');
    cy.get('#to-two').contains('18.07 Dólares americanos');
  });
});
