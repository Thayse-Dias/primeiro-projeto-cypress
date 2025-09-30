class myInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            opentextField: ".oxd-select-text-input",
            dropdownOptions: ".oxd-select-dropdown",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
        }
        return selectors;    
    }

    // Atualização de dados pessoais
    fillPersonalDetails(firstName, lastName) {
        const sl = this.selectorsList(); // Cria variável local
        cy.get(sl.firstNameField).clear().type(firstName);   
        cy.get(sl.lastNameField).clear().type(lastName);   
    }   
            
    employeeIdDetails(employeeId, otherId, driverLicenseNumber) {   
        const sl = this.selectorsList(); // Cria variável local
        // Preenchimento de IDs
        cy.get(sl.genericField).eq(3).clear().type(employeeId);   
        cy.get(sl.genericField).eq(4).clear().type(otherId);   
        
        // CNH
        cy.get(sl.genericField).eq(5).clear().type(driverLicenseNumber); 
    }

    fillLicenseExpiryDate(expiryDate) {
        const sl = this.selectorsList();
        // Data de expiração da licença
        cy.get(sl.dateField).eq(0).clear().type(expiryDate);
        cy.get(sl.dateCloseButton).click(); // Fecha calendário  
    }

    saveForm() {
        const sl = this.selectorsList(); // Cria variável local
        // Salva alterações e verifica sucesso
        cy.get(sl.submitButton).eq(0).click({force: true});
        cy.get('body').should('contain.text', 'Successfully Updated');
    }

    fillStatusDetails(nationality, maritalStatus, birthDate) {
        const sl = this.selectorsList(); // Cria variável local
        // Seleção de nacionalidade (dropdown)
        cy.get(sl.opentextField).eq(0).click();
        cy.get(sl.dropdownOptions).contains(nationality).click();
            
        // Seleção de estado civil (dropdown)
        cy.get(sl.opentextField).eq(1).click();
        cy.get(sl.dropdownOptions).contains(maritalStatus).click();
            
        // Data de nascimento
        cy.get(sl.dateField).eq(1).clear().type(birthDate);
        cy.get(sl.dateCloseButton).click();
    }
}

export default new myInfoPage();