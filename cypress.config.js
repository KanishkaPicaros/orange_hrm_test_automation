const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //base url for all the test cases
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
