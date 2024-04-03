describe('LuxuryCars', () => {
    it('is responsive on mobile screen size', () => {
        cy.visit('http://localhost:5173');
        cy.viewport(500, 700);
    });

    it('is not responsive on desktop screen size', () => {
        cy.visit('http://localhost:5173');
        cy.viewport(1000, 700);
    });
});
