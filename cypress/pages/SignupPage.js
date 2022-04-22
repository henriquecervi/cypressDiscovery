
class SignupPage {

    go () {        
        cy.visit('/')
        
        cy.get('[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        cy.get('[placeholder="Nome completo"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        cy.get('[placeholder="CEP"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        // funciona
        //cy.get('.delivery-method li [alt="Bicicleta"]').click()

        // other form
        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('.dropzone input[type="file"]').attachFile(deliver.cnh)
    }

    submit () {
        cy.get('button.button-success').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('#swal2-title').should('have.text', expectedMessage)
    }
}

export default SignupPage;