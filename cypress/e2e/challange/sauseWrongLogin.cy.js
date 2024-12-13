describe("Sauce - Usuario Standard", { testIsolation: false }, () => {
    
    it("Ingresar en la pagina", () => { 
        cy.visit("https://www.saucedemo.com/");
    });

    it('Logueo con usuario incorrecta', () => {
        const username = 'user1'
        const password = 'secret_sauce'        
        cy.login(username, password)
        cy.get('h3').contains('Username and password do not match any user in this service').should('be.visible')        
    });

    it('Logueo con contraseña incorrecta', () => {
        const username = 'standard_user'
        const password = 'password1'        
        cy.login(username, password)
        cy.get('h3').contains('Username and password do not match any user in this service').should('be.visible')        
    });

});