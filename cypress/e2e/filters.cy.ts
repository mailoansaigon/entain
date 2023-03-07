import { CATEGORY_ID_THOROUGHBRED, CATEGORY_ID_GREYHOUND, CATEGORY_ID_HARNESS } from "../config/constants";

var MAX_ITEMS = 5;

describe('Category Filters', () => {
  it('Test selecting Thoroughbred', () => {
    cy.visit('');
    cy.get('.item').its('length').should('be.lte', MAX_ITEMS);
    cy.get('[data-testid=category-filters]').within(() => {
      [CATEGORY_ID_GREYHOUND, CATEGORY_ID_HARNESS].forEach((category) => {
        cy.get(`[data-testid=category-filter-${category}]`).within(() => {
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
          cy.get('[data-testid=category-filter-checkbox]').click();
          cy.get('[data-testid=category-filter-checkbox]').should('not.be.checked');
        });
      })
    });
    cy.get('.item').its('length').should('be.lte', MAX_ITEMS);
  });

  it('Test selecting Greyhound', () => {
    cy.visit('');
    cy.get('.item').its('length').should('be.lte', MAX_ITEMS);
    cy.get('[data-testid=category-filters]').within(() => {
      [CATEGORY_ID_THOROUGHBRED, CATEGORY_ID_HARNESS].forEach((category) => {
        cy.get(`[data-testid=category-filter-${category}]`).within(() => {
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
          cy.get('[data-testid=category-filter-checkbox]').click();
          cy.get('[data-testid=category-filter-checkbox]').should('not.be.checked');
        });
      })
    });
    cy.get('.item').its('length').should('be.lte', MAX_ITEMS);
  });

  it('Test selecting Harness', () => {
    cy.visit('');
    cy.get('.item').its('length').should('be.lte', MAX_ITEMS);
    cy.get('[data-testid=category-filters]').within(() => {
      [CATEGORY_ID_THOROUGHBRED, CATEGORY_ID_GREYHOUND].forEach((category) => {
        cy.get(`[data-testid=category-filter-${category}]`).within(() => {
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
          cy.get('[data-testid=category-filter-checkbox]').click();
          cy.get('[data-testid=category-filter-checkbox]').should('not.be.checked');
        });
      })
    });
    cy.get('.item').its('length').should('be.lte', MAX_ITEMS);
  });

});