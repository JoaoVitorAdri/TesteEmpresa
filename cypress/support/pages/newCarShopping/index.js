const el = require('./elements').ELEMENTS

const faker = require('faker-br');


class newCar {

    adicionarProdutoPaginaInicial() {

        cy.get(el.itemPrimeiraPagina).click()
          .wait(1000)
          .get(el.botaoAdicionarItemCarrinho).click()
          .wait(2000)
          .get(el.frontPage).click()
          .wait(100)
          .get(el.botaoCarrinho).click()
          .wait(1000)
          


    }

    adicionarProdutoPaginaBusca() {

      
      cy.get(el.campoDeBusca).type('Hero Hoodie{enter}')
          .wait(1000)         
          .get(el.primeiroItemDaLista).click()
          .wait(1000)
          .get(el.selecionarTamanho).click()
          .get(el.selecionarCor).click()
          .get(el.botaoAdicionarItemCarrinho).click()
          .wait(1000)
          .get(el.frontPage).click()
          .wait(100)
          .get(el.botaoCarrinho).click()
          .wait(1000)



    }

    adicionarProdutoPaginaDoProduto() {

      cy.get(el.selecionarSetorYopa).click()
          .wait(1000)
          .get(el.selecionarGrips).click()
          .wait(3000)
          .get(el.botaoAdicionarItemCarrinho).click()
          .get(el.frontPage).click()
          .wait(100)
          .get(el.botaoCarrinho).click()
          .wait(1000)
          
       
    }
}

export default new newCar();