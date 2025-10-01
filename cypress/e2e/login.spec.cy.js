import userData from '../fixtures/userData.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'



describe('Orange HRM Login Tests', () => {
     it('Login - Fail', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithCredentials(userData.userFail.username, userData.userFail.password)
        loginPage.checkAcessInvalid()

    })

    it('Login - Success', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithCredentials(userData.userSucess.username, userData.userSucess.password)
        dashboardPage.checkDashboardPage()
    })
})



