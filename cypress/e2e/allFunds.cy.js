describe('Testeando la funcionalidad de la app de noticias', () => {

  it('Abrimos la web y comprobamos que se muestra la pantalla de Home', () => {
    cy.visit("http://localhost:3000")
    cy.contains("News App")
  })

  it('Navegamos donde se encuentran todas las noticias', () => {
    cy.get('.app > .navbar > .list > a:nth-child(2) > span').click()
  })

  it('Comprobamos que existen las noticias', () => {
    
  })


})