export const navigateToFirstPlusArticle = (newUrl) => {    
    cy.visit(`${newUrl[0].href}/?origin=app`,
    {
        onBeforeLoad: win => {
            win.fetch = null;}
        }
    );
};


export const navigator = (BRAND, addition="") => {
  let originDelimiter = '?';

  if (addition.indexOf('?') > -1) {
    originDelimiter = '&';
  }

  cy.visit(
    `https://${sdlc}.${BRAND.url}${addition}${originDelimiter}origin=app&`,
    {
      // Let's see if this fixes something: https://github.com/cypress-io/cypress/issues/943#issuecomment-523349234
      headers: {
        Connection: 'Keep-Alive',
      },
    },
    {
      timeout: 10000,
    }
  );
};