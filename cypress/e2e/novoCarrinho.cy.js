/// <reference types="Cypress" />

import newCar from '../support/pages/newCarShopping';



describe('Fluxo de adicionar itens ao carrinho', () => {

  it('Adicinar um item da pagina inicial ao carrinho', () => {

    cy.wait(100)
    newCar.adicionarProdutoPaginaInicial()

  })

  it('Adicinar um item da pagina de busca ao carrinho', () => {

    cy.wait(100)
    newCar.adicionarProdutoPaginaBusca()

  })

  it.only('Adicinar um item da pagina de yoga ao carrinho', () => {

    cy.wait(100)
    newCar.adicionarProdutoPaginaDoProduto()

  })


})