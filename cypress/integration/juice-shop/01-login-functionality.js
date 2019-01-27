describe('Check the Login Functionality', function () {
    it('Check the system behavior when password is invalid and email address is valid', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/login')

        cy.get('#email').type('ewa@ewa.ewa').should('have.value', 'ewa@ewa.ewa')
        cy.get('#password').type('ewa.ewa').should('have.value', 'ewa.ewa')
        cy.get('#loginButton').click()

        cy.get('.error').should('contain', 'Invalid email or password.') 
    })


    it('Check the system behavior when email address and password is valid', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/login')

        cy.get('#email').type('ewa@ewa.ewa').should('have.value', 'ewa@ewa.ewa')
        cy.get('#password').type('ewaewa').should('have.value', 'ewaewa')
        cy.get('#loginButton').click()

        cy.wait(2000)

        cy.get('button > span').contains('Logout').should('contain', 'Logout')

        cy.url().should('contain', 'search')
    })


    it('Check the system behavior when  email address and password are blank', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/login')


        cy.get('#loginButton').should('have.attr', 'disabled')
    })
    

    it('Check the system behavior when email address not blank, password is blank', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/login')

        cy.get('#email').type('ewa@ewa.ewa').should('have.value', 'ewa@ewa.ewa')
        cy.get('#password').should('have.value', '')

        cy.get('#loginButton').should('have.attr', 'disabled')
    })


    it('Check password viewing option', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/login')

        
        cy.get('#password').should('have.attr','type','password')
        cy.get('mat-form-field:nth-child(3) button').click()
        cy.get('#password').should('have.attr','type','text')
    })





})