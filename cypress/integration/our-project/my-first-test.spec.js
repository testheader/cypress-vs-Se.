import {navigateToFirstPlusArticle} from "../../fixtures/page-object/homepage"

describe('login on plus article', function() {
    
    it('use new account', function() {
        cy.visit('https://preview.hbvl.be/?origin=app');    
        cy.get('.article-teaser--plus a')
        .first()
        .then(url => navigateToFirstPlusArticle(url));
        
        cy.server();

        cy.route('GET', '**/accountstatus/**').as("tmp");

        cy.get('[data-testid="button-close"]').click();
        cy.get('[data-current-screen="CtaAuthPaying"]').get('form button').click();
        cy.get('[name="emailAddress"]').type("fakemailadres@notreal.com");
        cy.get('[data-current-screen="Auth10"]').get('button[type="submit"]').click();
        cy.get('[data-current-screen="Conf20"]').should('exist');
  })
    
    it('use existing account', function() {
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
