import signup from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'

describe('Signup', () => {

    //to use fixture we need "function" in case of arrowFunction
    // beforeEach(function () {
    //     cy.fixture("deliver").then((d) => {
    //         this.deliver = d
    //     })
    // })
    it('User should deliver', function () {     
        
        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShouldBe('Aí Sim...')
    })

    it('Invalid E-mail', function () {

        var deliver = SignupFactory.deliver()

        deliver.email = 'invalidEmail.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    it.only('Required fields', () => {

        signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
        
    });
})