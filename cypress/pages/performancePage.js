class performancePage {
    selectorsList() {
        const selectors = {
            employeeNameField: ".oxd-autocomplete-text-input > input",
            dropdownOptions: ".oxd-autocomplete-dropdown", // Container das sugestões
            optionItem: ".oxd-autocomplete-option" // Itens individuais das sugestões
           
        }
        return selectors
    }

    fillEmployeeNameAndSelectSpecific(partialName, fullName) {
        // Preenchimento de parte do nome do funcionário
        cy.get(this.selectorsList().employeeNameField).clear().type(partialName);
        // Seleção do nome completo na lista de sugestões
        cy.get(this.selectorsList().dropdownOptions)
          .should('be.visible') // Verifica se o dropdown está visível
          .within(() => {
              cy.get(this.selectorsList().optionItem)
                .contains(fullName) // Procura o nome completo
                .click(); // Clica na opção correta
          });   
    }

}

export default new performancePage();