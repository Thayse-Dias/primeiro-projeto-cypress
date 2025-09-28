// ====== Cenários de Testes de Login ======

import userData from '../fixtures/userData.json'
//Const userData importado do arquivo userData.json

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid", //Verificação do título do Dashboard
    wrongCredentialsAlert: ".oxd-alert",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

  // Cenário de Teste 1: Login com Sucesso e navegação até a página 'My Info'
  // baseUrl (cy.visit) definida no cypress.config.js
  // Utilizando o selector por atributo, através do comando 'get' para localizar os elementos na página.
  
  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username) 
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') 
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click() //Acessando a página 'My Info' do site
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest') //Atualizando o campo 'First Name'
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest') //Atualizando o campo 'Last Name'
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId') //Atualizando o campo 'Employee Id'
    cy.get(selectorsList.genericField).eq(4).clear().type('otherTest') 
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('1983-03-26') //Atualizando o campo 'Date of Birth'
    cy.get(selectorsList.dateCloseButton).click() //Fechando o calendário do campo 'Date of Birth'
    cy.get(selectorsList.submitButton).eq(0).click() //Salvando as alterações
    cy.get('body').should('contain.text', 'Successfully Updated') //Verificação da mensagem de sucesso
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
