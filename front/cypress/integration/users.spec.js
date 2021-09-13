/* eslint-disable func-names */
/* eslint-disable no-undef */

describe('Registration', function () {
  it('User can register', function () {
    cy.visit('http://localhost:3000/auth');
    cy.get('#registerBtn').click();
    cy.get('#username').type('tester');
    cy.get('#password').type('secret');
    cy.get('#passwordConfirm').type('secret');
    cy.get('#submit').click();
  });
});
