/// <reference types="Cypress" />

import login from '../support/pages/newLogin';



describe('Novo usuario', () => {

  it('Fluxo para criar um novo usuario', () => {

    cy.wait(100)
    login.logarUsuario()
    
  })


})