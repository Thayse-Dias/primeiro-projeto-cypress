// ====== Cenários de Testes de Login ======

import userData from '../fixtures/userData.json'

const { selectFields } = require("express-validator/lib/field-selection")

// Utilizando o selector por atributo, através do comando 'get' para localizar os elementos na página.

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialsAlert: ".oxd-alert",
  }

  // Cenário de Teste 1: Login com Sucesso 
  it.only('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') 
    cy.get(selectorsList.dashboardGrid)
  })

  // Cenário de Teste 2: Login sem Sucesso 
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert).contains('Invalid credentials')
  })

})
