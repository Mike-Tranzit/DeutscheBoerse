describe('Products', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(1500);
    cy.get(':nth-child(1) > .mat-list-item').click();
  });

  it('should have buttons', () => {
    cy.url().should('include', '/series/');
    cy.wait(1500);
    cy.get('.mat-warn').should('be.visible');
    cy.get('.mat-primary').should('be.visible');
    cy.get('.mat-primary').should('be.disabled');
  });

  it('should have series', () => {
    cy.wait(1500);
    const el = cy.get(':nth-child(1) > .mat-list-item-content');
    el.click();
    cy.get('.mat-primary').should('not.be.disabled');
  });

  it('should redirect to the back', () => {
    cy.get('.mat-warn').click();
    cy.wait(500);
    cy.url().should('not.include', '/series/');
  });
});
