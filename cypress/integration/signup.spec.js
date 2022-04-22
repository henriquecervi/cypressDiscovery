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
})