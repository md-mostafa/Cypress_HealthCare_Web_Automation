import LoginPage from "../pages/loginPage"

describe('Testing Login Functionality', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Login with valid creds', () => {
    loginPage.doLogin("John Doe", "ThisIsNotAPassword");
    loginPage.loginSuccessfulAssertion();
  });
})