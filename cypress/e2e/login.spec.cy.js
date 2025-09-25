// ====== Cenários de Testes de Login ======

const { selectFields } = require("express-validator/lib/field-selection")

// Utilizando o selector por atributo, através do comando 'get' para localizar os elementos na página.

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialsAlert: ".oxd-alert",
  }

  // Cenário de Teste 1: Login com Sucesso 
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') 
    cy.get(selectorsList.selectionTitleTopBar).contains('Dashboard')
  })

  // Cenário de Teste 2: Login sem Sucesso 
  it.only('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert).contains('Invalid credentials')
  })

})
