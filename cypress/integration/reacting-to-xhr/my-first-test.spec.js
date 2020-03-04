import {navigateToFirstPlusArticle} from '../../fixtures/page-object/homepage.js'
describe('request new account', function() {
  //successful code
  /* it('works end to end', function() {
    cy.visit('https://preview.hbvl.be/?origin=app');    
    cy.get('.article-teaser--plus a')
      .first()
      .then(url => navigateToFirstPlusArticle(url));
  
    cy.get('[data-testid="button-close"]').click();
    cy.get('[data-current-screen="CtaAuthPaying"]').get('form button').click();
    cy.get('[name="emailAddress"]').type("fakemailadres@notrealy.com");
    cy.get('[data-current-screen="Auth10"]').get('button[type="submit"]').click();
    cy.get('[data-current-screen="Conf20"]').should('exist');
  })*/ 


  //successful code with a route
/*  it('using routes to manipulate the code', function() {
    cy.visit('https://preview.hbvl.be/?origin=app');    
    cy.get('.article-teaser--plus a')
      .first()
      .then(url => navigateToFirstPlusArticle(url));
      
    cy.server();

    cy.route('GET', '**\/accountstatus/**').as("accountstatus");

    cy.get('[data-testid="button-close"]').click();
    cy.get('[data-current-screen="CtaAuthPaying"]').get('form button').click();
    cy.get('[name="emailAddress"]').type("fakemailadres@notreal.com");
    cy.get('[data-current-screen="Auth10"]').get('button[type="submit"]').click();
    cy.get('[data-current-screen="Conf20"]').should('exist');
  })
*/


it('using routes to manipulate the code', function() {
    cy.visit('https://preview.hbvl.be/?origin=app');    
    cy.get('.article-teaser--plus a')
      .first()
      .then(url => navigateToFirstPlusArticle(url));
      
    cy.server();

    cy.route('GET', '**/accountstatus/**',{accountStatus: "Full"}, {status: 200}).as("tmp");

    cy.get('[data-testid="button-close"]').click();
    cy.get('[data-current-screen="CtaAuthPaying"]').get('form button').click();
    cy.get('[name="emailAddress"]').type("fakemailadres@notreal.com");
    cy.get('[data-current-screen="Auth10"]').get('button[type="submit"]').click();
    cy.get('[data-current-screen="Auto10"]').should('exist');
  })
   
})


  