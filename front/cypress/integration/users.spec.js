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
    cy.contains('Hi, tester');
    cy.get('#logoutBtn').click();
  });
  it('Registration fails when username is already taken', function () {
    cy.visit('http://localhost:3000/auth');
    cy.get('#registerBtn').click();
    cy.get('#username').type('tester');
    cy.get('#password').type('secret');
    cy.get('#passwordConfirm').type('secret');
    cy.get('#submit').click();
    cy.contains('username: value already exists.');
  });
  it('Registration fails when passwords do not match', function () {
    cy.visit('http://localhost:3000/auth');
    cy.get('#registerBtn').click();
    cy.get('#username').type('tester2');
    cy.get('#password').type('secret');
    cy.get('#passwordConfirm').type('wrong');
    cy.get('#submit').click();
    cy.contains('Passwords do not match');
  });
  it('Registration fails with too short username', function () {
    cy.visit('http://localhost:3000/auth');
    cy.get('#registerBtn').click();
    cy.get('#username').type('tes');
    cy.get('#password').type('secret');
    cy.get('#passwordConfirm').type('secret');
    cy.get('#submit').click();
    cy.contains('Username must be 4 characters or more');
  });
  it('Registration fails with too short password', function () {
    cy.visit('http://localhost:3000/auth');
    cy.get('#registerBtn').click();
    cy.get('#username').type('tester3');
    cy.get('#password').type('abcd');
    cy.get('#passwordConfirm').type('abcd');
    cy.get('#submit').click();
    cy.contains('Password must be at least 5 characters');
  });
});
describe('Login', function () {
  it('User can login with correct details', function () {
    cy.get('#loginBtn').click();
    cy.get('#username').type('tester');
    cy.get('#password').type('secret');
    cy.get('#submit').click();
    cy.contains('Hi, tester');
    cy.get('#logoutBtn').click();
  });
  it('Login fails with incorrect password', function () {
    cy.get('#loginBtn').click();
    cy.get('#username').type('tester');
    cy.get('#password').type('wrong');
    cy.get('#submit').click();
    cy.contains('Invalid login');
  });
  it('Login fails with incorrect username', function () {
    cy.get('#loginBtn').click();
    cy.get('#username').type('abcdef');
    cy.get('#password').type('secret');
    cy.get('#submit').click();
    cy.contains('Invalid login');
  });
});
