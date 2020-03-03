//returns multiple items
/*describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('https://www.hbvl.be/?origin=app');
      cy.get('.article-teaser--plus').click();
    })
  })
*/

//opens didimi again
/*
  describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('https://www.hbvl.be/?origin=app');
      cy.get('.article-teaser--plus').first().click();
    })
  })
  */

 describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('https://www.hbvl.be/?origin=app');
    cy.get('.article-teaser--plus a').first().then(
      newUrl => cy.visit(`${newUrl[0].href}/?origin=app`));
  })
})