class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialsAlert: ".oxd-alert-content-text",
        }
        return selectors
    }

    acessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithCredentials(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default new LoginPage();
//Exporta uma instância da classe LoginPage para ser utilizada em outros arquivos