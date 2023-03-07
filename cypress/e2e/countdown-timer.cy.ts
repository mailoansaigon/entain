describe('Countdown Timer', () => {

  it('Countdown timer should be in correct format', () => {
    cy.visit('');
    cy.get('.item').within(() => {
      // each item have 2 <p> elements, so total number of <p> is 10 max
      cy.get('p').its('length').should('be.lte', 10);
      var numElems = cy.get('p').its('length');
      var countdownRegex = /[\dh]?[\s]?[\dm]?[\s]?[\ds]?/;
      /*
      for (var i=1; i < numElems; i = i+2) {
        cy.get('p').eq(i).invoke('text').should('match', countdownRegex);
      }*/
      cy.get('p').eq(1).invoke('text').should('match', countdownRegex);
      cy.get('p').eq(3).invoke('text').should('match', countdownRegex);
      cy.get('p').eq(5).invoke('text').should('match', countdownRegex);
      cy.get('p').eq(7).invoke('text').should('match', countdownRegex);
      cy.get('p').eq(9).invoke('text').should('match', countdownRegex);
    });
  });

});
