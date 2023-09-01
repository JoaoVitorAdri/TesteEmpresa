const el = require('./elements').ELEMENTS

const faker = require('faker-br');


class newBuy {

    fazerUmaCompra() {
        
        cy.wait(10000)
          .get(el.botaoCheckOut).click()
          .wait(10000)
          .get(el.botaoFecharPedido).click()
          .wait(10000)
          .get(el.botaoFecharPagamento).click()
          .wait(10000)



    }

    checarListaPedidos(){

        cy.get(el.botaoTelaInicial).click()
          .wait(1000)
          .get(el.menuPerfil).click()
          .wait(1000)
          .get(el.minhaConta).click()
          .wait(1000)
          .get(el.meusPedidos).click()
          .wait(2000)
    }

    checarDetalhesPedido(){
        
        cy.get(el.detalhesDoPedido).click()

    }
}

export default new newBuy();
