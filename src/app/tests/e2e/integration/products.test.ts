describe('Products', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have title', () => {
    cy.elementOnlyOne('.mat-card-header-text');
  });

  it('should have sub-title', () => {
    cy.elementOnlyOne('.mat-card-subtitle');
  });

  it('should have list', () => {
    cy.wait(1500);
    cy.get('.mat-selection-list').should('be.visible');
    cy.lengthOfElementsShouldBeGreater(':nth-child(1) > .mat-list-item', 1);
  });
});
