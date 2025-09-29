class MenuPage {
    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
        }
        return selectors;
    } 
    accessMyInfo() {    
        cy.get(this.selectorsList().myInfoButton).click();
    } 
    accessPerformance() {    
        cy.get(this.selectorsList().performanceButton).click();
    }
    accessDirectory() {    
        cy.get(this.selectorsList().directoryButton).click();
    }     

}

export default new MenuPage();
//Exporta uma instância da classe MenuPage para ser utilizada em outros arquivos

