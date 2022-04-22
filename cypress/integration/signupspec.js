import signup from '../pages/SignupPage'

describe('Signup', () => {

    //to use fixture we need "function" in case of arrowFunction
    beforeEach(function () {
        cy.fixture("deliver").then((d) => {
            this.deliver = d
        })
    })
    it('User should deliver', function () {       

        const expectedmessage = 'Aí Sim...'

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalContentShouldBe(expectedmessage)
    })
})