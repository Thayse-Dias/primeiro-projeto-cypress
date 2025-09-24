// ====== Cenários de Testes de Login ======

//Utilizando o selector por atributo, através do comando 'get' para localizar os elementos na página.

//Cenário de Teste 1: Login com Sucesso 

describe('Orange HRM Tests', () => {
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') 
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')

  })
})

//Cenário de Teste 2: Login sem Sucesso 

  it.only('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Test')
    cy.get('input[name="password"]').type('Test123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert').contains('Invalid credentials')
  })
