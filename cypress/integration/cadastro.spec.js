import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {
    it('Seja um entregador', () => {
       
        let deliver = {
            name: 'TesteQA',
            cpf: '12345678900',
            email: 'test@test.com',
            whatsapp: '11912345678',
            address: {
                postalcode: '04849529',
                street: 'Rua 13 de Maio',
                number: '100',
                details: 'Test',
                district: 'Cantinho do Céu',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Bicicleta',
            cnh: '/images/cnh-digital.jpg'
        }       

        var signup = new SignupPage()
        const expectedmessage = 'Aí Sim...'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShouldBe(expectedmessage)
        

    })
})