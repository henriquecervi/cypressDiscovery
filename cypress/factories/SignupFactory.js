var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    
    deliver: function() {
       // var name = faker.name.firstName()

        var data = {
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
            cpf: cpf.generate(),
            email: faker.internet.email(),
            whatsapp: '11912345678',
            address: {
                postalcode: '04849529',
                street: 'Rua 13 de Maio',
                number: '100',
                details: 'Test',
                district: 'Cantinho do Céu',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Bike Elétrica',
            cnh: '/images/cnh-digital.jpg'
        }
        return data
    }
}