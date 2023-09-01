/// <reference types="Cypress" />

import newUser from '../support/pages/newUser';



describe('Novo usuario', () => {

  it('Fluxo para criar um novo usuario', () => {

    cy.wait(100)
    newUser.criarNovoUsuario()
    
  })


})
