const baseUrl = 'https://demo.opencart.cn/';

describe('Автоматизоване тестування Demo Store', () => {

  it('Відкриває головну сторінку магазину', () => {
    cy.visit(baseUrl);

    cy.get('body').should('be.visible');
    cy.contains('Your Store').should('be.visible');
  });

  it('Перевіряє переходи за внутрішніми посиланнями', () => {
    cy.visit(baseUrl);

    cy.contains('Laptops & Notebooks').click();

    cy.get('body').should('be.visible');
    cy.url().should('include', 'route=product/category');
  });

  it('Відкриває сторінку реєстрації', () => {
    cy.visit(`${baseUrl}index.php?route=account/register`);

    cy.get('#input-firstname').should('be.visible');
    cy.get('#input-lastname').should('be.visible');
    cy.get('#input-email').should('be.visible');
    cy.get('#input-password').should('be.visible');
  });

  it('Перевіряє пошук товарів', () => {
    cy.visit(baseUrl);

    cy.get('input[name="search"]')
      .should('be.visible')
      .type('test{enter}');

    cy.get('body').should('be.visible');
    cy.url().should('include', 'search');
  });

  it('Перевіряє форму реєстрації', () => {
    cy.visit(`${baseUrl}index.php?route=account/register`);

    cy.get('#input-firstname').should('be.visible');
    cy.get('#input-lastname').should('be.visible');
    cy.get('#input-email').should('be.visible');
    cy.get('#input-password').should('be.visible');

    cy.get('form')
      .contains('button', 'Continue')
      .should('be.visible');
  });

});