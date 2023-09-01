/// <reference types="Cypress" />

import newBuy from '../support/pages/newBuy';
import login from '../support/pages/newLogin';
import newCar from '../support/pages/newCarShopping';



describe('Fazer uma compra', () => {

  it('Fluxo para criar fazer uma compra', () => {

    cy.wait(100)
    login.logarUsuario()
    newCar.adicionarProdutoPaginaBusca()
    newBuy.fazerUmaCompra()
    newBuy.checarListaPedidos()
    newBuy.checarDetalhesPedido()
    
  })


})