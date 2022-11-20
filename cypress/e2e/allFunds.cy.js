describe('Testeando la funcionalidad de la app de noticias', () => {

  it('Abrimos la web y comprobamos que se muestra la pantalla de Home', () => {
    cy.visit("http://localhost:3000")
    cy.contains("News App")
    cy.wait(4000)
  })

  it('Navegamos donde se encuentran todas las noticias', () => {
    cy.get('.app > .navbar > .list > a:nth-child(2) > span').click()
  })

  it('Comprobamos que existen las noticias', () => {
    cy.url().should('include', '/news')
    const classCard = cy.get('.card')
    cy.request('http://localhost:3017/news').as('news')
    cy.get('@news').should((response) => {
      const result = response.body.news.filter(element => !element.archived)
      classCard.should('have.length', result.length)
    })
    cy.window()
    .its("store")
    .invoke("getState")
    .its("news")
    .should("to.have.property", ('news','oneNews','categories','message','errorMessage'))
    cy.wait(5000)
  })

  it('Creamos una noticia', () => {
         cy.get('.app > .body-content > .addandsearch > .ant-btn > span').click()
         cy.get('.ant-modal').should('be.visible')

         cy.get('.ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #title').click()
         cy.get('.ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #title').type('Título de prueba')
         cy.get('.ant-modal-body > .ant-form > .elementForm > .ant-btn > span').click()
         cy.get('.ant-form-item-explain-error').should('have.length', 4)

         cy.wait(4000)

         cy.get('.ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group-wrapper > .ant-input-wrapper > #link').click()
         cy.get('.ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group-wrapper > .ant-input-wrapper > #link').type('www.google.com')
         cy.wait(2000)
         cy.get('.ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #author').type('Ger')
         cy.wait(2000)
         cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #category').click()
         cy.get('.rc-virtual-list-holder > div > .rc-virtual-list-holder-inner > .ant-select-item:nth-child(4) > .ant-select-item-option-content').click()
         cy.wait(2000)
         cy.get('.ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #description').click() 
         cy.get('.ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #description').type('Descripción de prueba')
         cy.wait(2000)
         cy.get('.ant-modal-body > .ant-form > .elementForm > .ant-btn > span').click()  
         cy.get('.ant-form-item-explain-error').should('have.length', 1)

         cy.wait(4000)

         cy.get('.ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #content').click() 
         cy.get('.ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #content').type('Contenido de prueba') 
         cy.wait(2000) 
         cy.get('.ant-modal-body > .ant-form > .elementForm > .ant-btn > span').click()    
         cy.get('.ant-form-item-explain-error').should('not.exist')
         cy.get('.errors').contains('Please enter an image')

         cy.get('input[type=file]').selectFile('../image.jpg', {force: true})
        
         cy.get('.ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group > #keywords').click()      
         cy.get('.ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group > #keywords').type('Cypress')      
         cy.get('.ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group > .ant-btn > span').click()
         cy.get('.ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group > #keywords').clear()
         cy.wait(3000)
         cy.get('.ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group > #keywords').click()
         cy.get('.ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group > #keywords').type('Testing')
         cy.get('.ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group > .ant-btn > span').click()
         cy.get('.ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group > #keywords').clear()
         cy.wait(3000)
         cy.get('.ant-modal-body > .ant-form > .elementForm > .ant-btn > span').click()
         cy.get('.errors').should('not.exist')
         cy.get('.ant-modal').should('not.exist')  
  })

  it('Comprobamos si la noticia se ha guardado en el orden de fecha de ingreso', () => {
    cy.scrollTo(0, 0)
    cy.get('.card').first().contains('Título de prueba')
    cy.wait(5000)
  })

  it('Archivamos una noticia y comprobamos que está en noticias archivadas ordenada por fecha archivada', () => {
    cy.get('.archiveButton').eq(0).click()
    cy.get('.card').contains('Título de prueba').should('not.exist');
    cy.wait(4000)
    cy.get('.app > .navbar > .list > a:nth-child(3) > span').click()
    cy.url().should('include', '/archived')
    cy.get('.card').first().contains('Título de prueba')
    cy.wait(5000)
  })

  it('Borramos la noticia y comprobamos que ya no está en ninguna lista', () => {
    cy.get('.deleteButton').eq(0).click()
    cy.contains('#Cypress').should('not.exist');
    cy.wait(4000)
    cy.get('.app > .navbar > .list > a:nth-child(2) > span').click()
    cy.url().should('include', '/news')
    cy.get('.card').contains('Título de prueba').should('not.exist');
    cy.wait(4000)
    cy.get('.app > .navbar > .list > a:nth-child(1) > span').click()
    cy.url().should('include', '/home')
    cy.contains("News App")
    cy.wait(4000)
  })

})