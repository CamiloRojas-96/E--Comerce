// Pruebas básicas de Cypress para el frontend del e-commerce

describe('E-Commerce Frontend', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Cambia el puerto si tu app corre en otro
  });

  it('Carga la página principal y muestra el hero', () => {
    cy.contains('Descubre lo mejor de Pokémon TCG').should('be.visible');
  });

  it('El navbar muestra el logo y los enlaces principales', () => {
    cy.get('nav').should('exist');
    cy.get('nav').contains('TCG Shop').should('be.visible');
    cy.get('nav').contains('Productos').should('be.visible');
    cy.get('nav').contains('Clientes').should('be.visible');
    cy.get('nav').contains('Precios').should('be.visible');
  });

  it('El botón "Agregar Producto" está visible', () => {
    cy.contains('Agregar Producto').should('be.visible');
  });

  it('El catálogo de productos muestra cards', () => {
    cy.get('h1').contains('Catálogo de Productos').should('be.visible');
    cy.get('button').contains('Agregar al carrito').should('exist');
  });

  it('El formulario de producto se muestra al hacer click en "Agregar Producto"', () => {
    cy.contains('Agregar Producto').click();
    cy.get('form').should('be.visible');
    cy.get('form').contains('Agregar Producto');
  });
});
