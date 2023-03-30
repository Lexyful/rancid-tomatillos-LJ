describe('Rancid Tomatillos Details Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.loadPage()
    cy.get('.movie-card').contains('h3', 'Black Adam').click()
    cy.loadSingleMovie()
  });

  it('Should show the details page with the header', () => {
     cy.get('.header').find('img');
     cy.get('.header').contains('h1', 'Rancid Tomatillos');
  });

  it('Should have a banner', () => {
    cy.get('img')
    .should( 'have.attr', 'src', '/static/media/tomatillo.c57a8444c30f4e09f57a.png')
    .should('be.visible')
  });
   
  it('Should have details', () => {
    cy.get('.movie-details').contains('h1', 'Black Adam', 'h2', 'The world needed a hero. It got Black Adam.')
    cy.get('.movie-overview')
    .find('p:first()').contains('125')
    cy.get('.movie-overview')
    .find('p:eq(1)').contains('2022-10-19')
    cy.get('.movie-overview')
    .find('p:eq(2)').contains('Action')
    cy.get('.movie-overview')
    .find('p:eq(2)').contains('Fantasy')
    cy.get('.movie-overview')
    .find('p:eq(2)').contains('Science Fiction')
    cy.get('.movie-overview')
    .find('p:eq(3)').contains('200000000')
    cy.get('.movie-overview')
    .find('p:eq(4)').contains('384571691')
    cy.get('.movie-overview')
    .find('p:eq(5)').contains('4')
    cy.get('p').contains('Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
  });
});

describe('Rancid Tomatillos Details Page Sad Path', () => {
  it('Should show an error message with failed fetch with button to go home', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 404,
    });

    cy.visit('http://localhost:3000')
    .loadPage()
    .get('.movie-card').contains('h3', 'Black Adam').click()
    .get('p').contains('Something went wrong when loading the movie. Click Home to select another movie.')
    .get('button').contains('Home').click()
    .get('.movie-card').should('have.length', 5)
    .get('.movie-card:first()').contains('h3', 'Black Adam')
    .get('.movie-card:last()').contains('h3', 'The Minute You Wake Up Dead')
  });
});