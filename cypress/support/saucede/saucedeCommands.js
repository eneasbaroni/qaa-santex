//para que funcionen tengo que importar el archivo de comandos en ./e2e.js

Cypress.Commands.add("login", (username, password) => {   

    cy.get('input[placeholder="Username"]').type(username)
    cy.get('input[placeholder="Password"]').type(password)    
    cy.get('#login-button').click()   

})

Cypress.Commands.add("fillForm", (name, lastName, postalCode) => {   


    cy.get('input[placeholder="First Name"]').type(name)
    cy.get('input[placeholder="Last Name"]').type(lastName)
    cy.get('input[placeholder="Zip/Postal Code"]').type(postalCode)
     
    cy.get('#continue').click()  

})
