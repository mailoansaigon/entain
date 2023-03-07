describe('Countdown Timer', () => {

  it('Countdown timer should be in correct format', () => {
    cy.visit('');
    cy.get('.item').within(() => {
      cy.get('p').eq(1).invoke('text').should('match', /[\dm]?[\s]?[\ds]?/);
      cy.get('p').eq(3).invoke('text').should('match', /[\dm]?[\s]?[\ds]?/);
      cy.get('p').eq(5).invoke('text').should('match', /[\dm]?[\s]?[\ds]?/);
      cy.get('p').eq(7).invoke('text').should('match', /[\dm]?[\s]?[\ds]?/);
      cy.get('p').eq(9).invoke('text').should('match', /[\dm]?[\s]?[\ds]?/);
    });
    //cy.get('p').should('match', /\dm[ \ds]?/);

  });

});
