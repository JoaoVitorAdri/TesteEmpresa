const el = require('./elements').ELEMENTS

const faker = require('faker-br');



class newUser {

    criarNovoUsuario() {

        cy.visit('https://magento2-demo.magebit.com/customer/account/create/')
          .get(el.campoNome).type("Roberto")
          .wait(500)
          .get(el.campoSobrenome).type("Silva")
          .wait(500)
          .get(el.campoEmail).type("robertosilva10@mailinator.com")
          .wait(500)
          .get(el.campoSenha).type("Senha@123")
          .wait(500)
          .get(el.campoConfirmarSenha).type("Senha@123")
          .wait(500)
          .get(el.botaoConfirmar).click()
          .wait(2000)
          .get(el.botaoCadastrarEndereço).click()
          .wait(500)
          .get(el.campoRua).type('Avenida Paulista')
          .wait(500)
          .get(el.campoTelefone).type('1199999999')
          .wait(500)
          .get(el.campoCep).type('01310-000')
          .wait(500)
          .get(el.campoCidade).type('Sao Paulo')
          .wait(500)
          .get(el.campoPais).select('BR')
          .wait(500)
          .get(el.campoEstado).select('508')
          .wait(500)
          .get(el.confirmarEndereco).click()
          .wait(500)



    }
}

export default new newUser();
