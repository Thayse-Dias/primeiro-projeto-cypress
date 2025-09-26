// ====== Cenários de Testes de Login ======

import userData from '../fixtures/userData.json'
//Const userData importado do arquivo userData.json

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid", //Substituindo a verificação do título do Dashboard
    wrongCredentialsAlert: ".oxd-alert",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']"
  }

  // Cenário de Teste 1: Login com Sucesso 
  //baseUrl (cy.visit) definida no cypress.config.js
  // Utilizando o selector por atributo, através do comando 'get' para localizar os elementos na página.
  
  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username) 
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') 
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click() //Acessando a página 'My Info' do site
  })

  // Cenário de Teste 2: Login sem Sucesso 
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert).contains('Invalid credentials')
  })

})
