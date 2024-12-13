describe("Sauce - Usuario con Error", { testIsolation: false }, () => {
    
    it("Ingresar en la pagina", () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.clearAllSessionStorage({log: true})
        cy.visit("https://www.saucedemo.com/");
    });

    it('Logueo con el usuario standard', () => {
        const username = 'problem_user'
        const password = 'secret_sauce'        
        cy.login(username, password)
        cy.get('span').contains('Products').should('be.visible')
    });

    it('Agregar los productos al carrito', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('[id*="add-to-cart-test"]').click()

        cy.get('.shopping_cart_badge').contains('6').should('be.visible') //se genera erro ya que no puede agregar todos los productos
    })

    it('ingresar al carrito', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('span').contains('Your Cart').should('be.visible')        
    })
    
    it('Confirmar el checkout', () => {
        cy.get('#checkout').click()
        cy.get('span').contains('Checkout: Your Information').should('be.visible')        
    })
    
    it('Completar formulario de información', () => {
        const name = 'Juan'
        const lastName = 'Perez'
        const postalCode = '12345'       
        cy.fillForm(name, lastName, postalCode) //genera error ya que no se llenan todos los campos por error en el formulario
        cy.get('span').contains('Checkout: Overview').should('be.visible')
    })

    //no se puede acceder a esta prueba ya que el formulario genera error y no se puede acceder a la vista de checkout
    it('Finalizar compra', () => {
        cy.get('#finish').click() 
        cy.get('span').contains('Checkout: Complete!').should('be.visible')
    })

    //no se puede acceder a esta prueba ya que el formulario genera error y no se puede acceder a la vista de checkout
    it('Volver al Home', () => {
        cy.get('#back-to-products').click()
        cy.get('span').contains('Products').should('be.visible')
    })
    
    it('Cerrar sesión', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('#login-button').should('be.visible')
    })     

});