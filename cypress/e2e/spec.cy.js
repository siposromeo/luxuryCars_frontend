describe('tesztek stb: Főoldal tesztje', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('5 nav-link itemnek kell lennie', () => {
    cy.get('.a').its('length').should('eq',5)
  })

  it('Át kell navigálnia a fő oldalra a "LuxuryCars" gomb megnyomása után',()=>{
    cy.get('.a').contains('LuxuryCars').click()
    cy.url().should('include','/')
  })
  it('Át kell navigálnia az autók oldalra az "Autóink" gomb megnyomása után',()=>{
    cy.get('.a').contains('Autóink').click()
    cy.url().should('include','/car')
  })
  it('Át kell navigálnia a rólunk oldalra a "Team gomb" megnyomása után',()=>{
    cy.get('.a').contains('Team').click()
    cy.url().should('include','/contact')
  })
  it('Át kell navigálnia a login oldalra a "Bejelentkezés" gomb megnyomása után',()=>{
    cy.get('.a').contains('Bejelentkezés').click()
    cy.url().should('include','/login')
  })
  it('Át kell navigálnia a regisztrációs oldalra a "Regisztráció" gomb megnyomása után',()=>{
    cy.get('.a').contains('Regisztráció').click()
    cy.url().should('include','/registration')
  })
  
  it('A "Foglald le most" gombra kattintva át kerülünk az autók oldalra ', () => {
    cy.get('.btn').contains('Foglald le most').click()
    cy.url().should('include','/car')
  })
  it('A "Regisztráció" gombra kattintva át kerülünk az regisztrációs oldalra ', () => {
    cy.get('.btn').contains('Regisztráció').click()
    cy.url().should('include','/registration')
  })


})


describe('Car oldal tesztje', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/car')
  })
  it('10db autókártyának kell lennie egy lapon', () => {
    cy.get('.card').its('length').should('eq',10)
  })
  it('2db gombnak kell lennie egy lapon', () => {
    cy.get('.btn').its('length').should('eq',2)
  })

})



describe('Register oldal tesztje', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/registration')
  })
  it('Be tud Regisztrálni', () => {
  cy.get('#nameInput').type('Nagy Andras')
   cy.get('#emailInput').type('nagyandras@gmail.com')
    cy.get('#inputPassword').type('andrasnagy')
    cy.get('#licenceNumber').type('123451234567')
    cy.get('#phoneNumberInput').type('0650998877')
    cy.get('#billingAddress').type('Hős utca 16.')
    cy.get('input').contains('Regisztráció').click()
  })
})

describe('Login oldal tesztje', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login')
  })
  it('Be tud jelentkezni', () => {
    cy.get('#emailInput').type('nagyandras@gmail.com')
    cy.get('#inputPassword').type('andrasnagy')
    cy.get('input').contains('Belépés').click()
  })

})



