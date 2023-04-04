import LoginPage from "../pages/loginPage"

describe('Testing Login Functionality', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
  });


  it('Login with invalid creds', () => {
    loginPage.doLogin('InvalidName', 'Invalidpassword');
    loginPage.loginUnsuccessfulAssertion();
  });

  it('Login with valid creds', () => {
    loginPage.doLogin("John Doe", "ThisIsNotAPassword");
    loginPage.loginSuccessfulAssertion();
  });
})