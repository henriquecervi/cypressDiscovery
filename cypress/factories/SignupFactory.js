
export default {
    
    deliver: function() {

        var data = {
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
            delivery_method: 'Bike Elétrica',
            cnh: '/images/cnh-digital.jpg'
        }
        return data
    }
}