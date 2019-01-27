describe('Check the Restore Password Functionality', function () {

    it('Check the system behavior when email adress is blank', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/forgot-password')

        cy.get('#resetButton').should('have.attr', "disabled")
    })

    it('Check the system behavior when email address is invalid', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/forgot-password')

        cy.get('#email').type('ewa@ewa.pl').should('have.value', 'ewa@ewa.pl')
        cy.get('#resetButton').should('have.attr', "disabled")
    })

    it('Check the system behavior when email address is valid', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/forgot-password')

        cy.get('#email').type('ewa@ewa.ewa').should('have.value', 'ewa@ewa.ewa')

        cy.get('#securityAnswer').should('exist')
        cy.get('#newPassword').should('exist')
        cy.get('#newPasswordRepeat').should('exist')
        cy.get('#resetButton').should('have.attr', "disabled")
    })

    it('Check the system behavior when answer to security question is invalid and passwords are the same', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/forgot-password')

        cy.get('#email').type('ewa@ewa.ewa').should('have.value', 'ewa@ewa.ewa')
        cy.get('#securityAnswer').type('ewa2').should('have.value', 'ewa2')
        cy.get('#newPassword').type('ewaewa').should('have.value', 'ewaewa')
        cy.get('#newPasswordRepeat').type('ewaewa').should('have.value', 'ewaewa')

        cy.get('#resetButton').click()

        cy.get('.error').should('contain', 'Wrong answer to security question.')
    })

    it('Check the system behavior when answer to security question is valid, and passwords are not equal', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/forgot-password')

        cy.get('#email').type('ewa@ewa.ewa').should('have.value', 'ewa@ewa.ewa')
        cy.get('#securityAnswer').type('ewa').should('have.value', 'ewa')
        cy.get('#newPassword').type('ewaewa').should('have.value', 'ewaewa')
        cy.get('#newPasswordRepeat').type('ewa').should('have.value', 'ewa')

        cy.get('#resetButton').click()

        cy.get('.error').should('contain', 'New and repeated password do not match.')
    })

    it('Check the system behavior when answer to security question is valid and passwords are the same', function () {
        cy.visit('https://juice-shop-for-testing.herokuapp.com/#/forgot-password')

        cy.get('#email').type('ewa@ewa.ewa').should('have.value', 'ewa@ewa.ewa')
        cy.get('#securityAnswer').type('ewa').should('have.value', 'ewa')
        cy.get('#newPassword').type('ewaewa').should('have.value', 'ewaewa')
        cy.get('#newPasswordRepeat').type('ewaewa').should('have.value', 'ewaewa')

        cy.get('#resetButton').click()

        cy.get('.confirmation').should('contain', 'Your password was successfully changed.')
    })


})