describe('Cadastro', () => {
    it('Seja um entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

        let deliver = {
            delivery_method: 'Bicicleta'
        }

        cy.get('[placeholder="Nome completo"]').type('TesteQA')
        cy.get('input[name="cpf"]').type('12345678900')
        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="whatsapp"]').type('11912345678')
        cy.get('[placeholder="CEP"]').type('04849529')
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address"]').should('have.value', 'Rua 13 de Maio')
        cy.get('input[name="address-number"]').type('100')
        cy.get('input[name="address-details"]').type('Test')
        cy.get('input[name="district"]').should('have.value', 'Cantinho do Céu')
        cy.get('input[name="city-uf"]').should('have.value', 'São Paulo/SP')

        // funciona
        //cy.get('.delivery-method li [alt="Bicicleta"]').click()

        // other form
        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('.dropzone input[type="file"]').attachFile('/images/cnh-digital.jpg')

        cy.get('button.button-success').click()

        cy.get('#swal2-title').should('have.text', 'Aí Sim...')



    })
})