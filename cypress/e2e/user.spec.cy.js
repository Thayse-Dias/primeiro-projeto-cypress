import userData from '../fixtures/userData.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'

describe('Orange HRM Tests', () => {

  // Mapeamento dos seletores utilizados nos testes
  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    opentextField: ".oxd-select-text-input",
    dropdownOptions: ".oxd-select-dropdown",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

  it.only('User Info Update - Sucess', () => {
    // Utilização dos métodos da classe loginPage para realizar o login
    loginPage.acessLoginPage()
    loginPage.loginWithCredentials(userData.userSucess.username, userData.userSucess.password)
    
    // Verificação de que o login foi bem-sucedido, utilizando o método da classe dashboardPage
    dashboardPage.checkDashboardPage()
    
    // Navegação para My Info
    menuPage.accessMyInfo() 
    
    // Atualização de dados pessoais
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest') // Nome
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest') // Sobrenome
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId') // ID do funcionário
    cy.get(selectorsList.genericField).eq(4).clear().type('otherTest') // Outro ID
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseTest') // Carteira de motorista
    
    // Data de expiração da licença
    cy.get(selectorsList.dateField).eq(0).clear().type('2030-01-01')
    cy.get(selectorsList.dateCloseButton).click() // Fecha calendário
    
    // Seleção de nacionalidade (dropdown)
    cy.get(selectorsList.opentextField).eq(0).click() // Abre dropdown
    cy.get(selectorsList.dropdownOptions).contains('Brazilian').click() // Seleciona opção
    
    // Seleção de estado civil (dropdown)
    cy.get(selectorsList.opentextField).eq(1).click() // Abre dropdown
    cy.get(selectorsList.dropdownOptions).contains('Married').click() // Seleciona opção
    
    // Data de nascimento
    cy.get(selectorsList.dateField).eq(1).clear().type('1983-03-26')
    cy.get(selectorsList.dateCloseButton).click() // Fecha calendário
    
    // Salva alterações e verifica sucesso
    cy.get(selectorsList.submitButton).eq(0).click({force: true}) // Força clique no botão salvar
    cy.get('body').should('contain.text', 'Successfully Updated') // Confirma mensagem

    // Navegação para Performance
    menuPage.accessPerformance()
    
    // Navegação para Directory
    menuPage.accessDirectory()
  })

  // CENÁRIO: LOGIN MAL-SUCEDIDO - CREDENCIAIS INVÁLIDAS
  it('Login - Fail', () => {
    // Fluxo de login com credenciais inválidas - usando a página de login
    loginPage.acessLoginPage()
    loginPage.loginWithCredentials(userData.userFail.username, userData.userFail.password)
    
    // Verificação de mensagem de erro
    cy.get(loginPage.selectorsList().wrongCredentialsAlert).contains('Invalid credentials')
  })
})