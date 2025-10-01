import userData from '../fixtures/userData.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'
import myInfoPage from '../pages/myInfoPage.js'
import performancePage from '../pages/performancePage.js' 

describe('Orange HRM Tests', () => {
    it.only('User Info Update - Sucess', () => {
        // Utilização dos métodos da classe loginPage para realizar o login
        loginPage.acessLoginPage()
        loginPage.loginWithCredentials(userData.userSucess.username, userData.userSucess.password)
        
        // Verificação de que o login foi bem-sucedido
        dashboardPage.checkDashboardPage()
        
        // Navegação para My Info
        menuPage.accessMyInfo() 
        
        // Atualização de dados usando os métodos da página
        myInfoPage.fillPersonalDetails('Thayse', 'Dias')
        myInfoPage.employeeIdDetails('12345', '67890', 'DRIVER123')
        myInfoPage.fillLicenseExpiryDate('2030-12-31')
        myInfoPage.fillStatusDetails('Brazilian', 'Married', '1983-03-26')
        myInfoPage.saveForm()
        
        // Navegação para a página Performance
        menuPage.accessPerformance()

        // Preenchimento do formulário de Performance
       performancePage.fillEmployeeNameAndSelectSpecific('Tho', 'Thomas Kutty Benny');
       
        // Navegação para a página Directory
        menuPage.accessDirectory()
    })

})