const el = require('./elements').ELEMENTS

const faker = require('faker-br');


class novoLogin {

    logarUsuario() {

        cy.get(el.botaologinConta).click()
          .wait(500)
          .get(el.campoEmail).type("robertosilva10@mailinator.com")
          .wait(500)
          .get(el.campoSenha).type("Senha@123")
          .wait(500)
          .get(el.botaoConfirmarLogin).click()


    }
}

export default new novoLogin();