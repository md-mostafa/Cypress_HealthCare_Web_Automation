const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      config.specPattern = [
        'cypress/e2e/loginTest.cy.js',
        'cypress/e2e/addToCartTest.cy.js'
      ]
      return config;
    },
  },
});
