
describe('Тестування сторінки math.html', () => {
  it('Обчислює функцію, заповнює форму та натискає Submit', () => {
    cy.visit('http://suninjuly.github.io/math.html');

    // Зчитуємо значення x зі сторінки
    cy.get('#input_value')
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        const x = Number(text.trim());

        // Обчислюємо f(x) = ln(|12 * sin(x)|)
        const answer = Math.log(Math.abs(12 * Math.sin(x)));

        // Вводимо відповідь
        cy.get('#answer').type(String(answer));

        // Вибираємо checkbox
        cy.get('#robotCheckbox').check();

        // Вибираємо radiobutton
        cy.get('#robotsRule').check();

        // Надсилаємо форму
        cy.contains('button', 'Submit').click();
      });
  });
});
