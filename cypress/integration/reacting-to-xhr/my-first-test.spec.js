import {navigateToFirstPlusArticle} from '../../fixtures/page-object/homepage.js'
//fails because it's to fast
describe('request new account', function() {
    /*
    it('works end to end', function() {
    
      cy.visit('https://www.hbvl.be/?origin=app');
      cy.get('.article-teaser--plus a')
        .first()
        .then(url => navigateToFirstPlusArticle(url));
    
        cy.get('[data-testid="button-close"]').click();
        cy.get('[data-current-screen="CtaAuthPaying"]').get('form button').click();
        cy.get('[name="emailAddress"]').type("fakemailadres@notrealy.com");
        cy.get('[data-current-screen="Auth10"]').get('button[type="submit"]').click();
        cy.get('data-current-screen="Conf20"').should('exist');
    })
    */

   it('works end to end', function() {
    cy.visit('https://www.hbvl.be/?origin=app');
    
    cy.server({
        timeout: 10000,
    });
    
    cy.route('POST', '/api/v1.1/Mail/ConfirmNew').as('newAccount');
    
    cy.get('.article-teaser--plus a')
      .first()
      .then(url => navigateToFirstPlusArticle(url));
  
      cy.get('[data-testid="button-close"]').click();
      cy.get('[data-current-screen="CtaAuthPaying"]').get('form button').click();
      cy.get('[name="emailAddress"]').type("fakemailadres@notrealy.com");
      cy.get('[data-current-screen="Auth10"]').get('button[type="submit"]').click();
      cy.wait('@newAccount');
      cy.get('data-current-screen="Conf20"').should('exist');
  }) 
   
})


  